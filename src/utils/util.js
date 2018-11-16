/* eslint-disable */
const ROOT = document.body
const DEFAULT_DOCK = ['bottom', 'top', 'right', 'left']

export const POSITION = {
  top: 'top',
  left: 'left',
  right: 'right',
  bottom: 'bottom',
  leftTop: 'left-top',
  rightTop: 'right-top',
  leftBottom: 'left-bottom',
  rightBottom: 'right-bottom',
  middle: 'middle'
}

/**
 * 校验位置信息
 *
 * @param {String} dock
 * @returns {Boolean} result
 */
export function checkDock (dock) {
  return Object.keys(POSITION).indexOf(dock) > 0
}

/**
 * 判断元素是否设置可滚动
 *
 * @param {Element} el
 */
export function scrollable (el) {
  let css = window.getComputedStyle(el, null)
  return ['overflow', 'overflow-x', 'overflow-y'].some(
    p => {
      return ~['scroll', 'auto'].indexOf(css[p])
    }
  )
}

/**
 * 获取指定元素父级第一个可滚动元素
 * @param {Element} el
 */
export function getScrollElement (el) {
  if (!el) return ROOT
  let parent = el.parentNode
  while (parent && parent !== ROOT) {
    if (scrollable(parent)) return parent
    else parent = parent.parentNode
  }
  return ROOT
}

/**
 * 获取目标元素之间边距
 * @param {Element} el
 * @param {Element} parent
 * @returns {Object}
 */
export function getLocation (el, parent) {
  if (!el) return

  const eRect = el.getBoundingClientRect()
  const pRect = parent.getBoundingClientRect()
  const { width, height } = eRect
  const { width: pw, height: ph } = pRect

  // 子元素相对于父级元素的位置
  const top = eRect.top - pRect.top
  const left = eRect.left - pRect.left
  const right = eRect.right - pRect.left
  const bottom = eRect.bottom - pRect.top

  const vertex = {
    tl: { x: left, y: top },
    tr: { x: right, y: top },
    br: { x: right, y: bottom },
    bl: { x: left, y: bottom }
  }

  // 计算目标元素中心点
  const midX = left + width / 2
  const midY = top + height / 2

  return {
    width,
    height,
    margin: {
      top: {
        dock: POSITION.top,
        computed: 'height',
        size: top,
        start: vertex.tl,
        mid: { x: midX, y: top },
        end: vertex.tr
      },
      bottom: {
        dock: POSITION.bottom,
        computed: 'height',
        size: ph - bottom,
        start: vertex.bl,
        mid: { x: midX, y: bottom },
        end: vertex.br
      },
      left: {
        dock: POSITION.left,
        computed: 'width',
        size: left,
        start: vertex.tl,
        mid: { x: left, y: midY },
        end: vertex.bl
      },
      right: {
        dock: POSITION.right,
        computed: 'width',
        size: pw - right,
        start: vertex.tr,
        mid: { x: right, y: midY },
        end: vertex.br
      }
    }
  }
}

/**
 * 计算元素的位置
 *
 * @param {Object} el
 * @param {Object} target
 * @param {Object} parent
 * @param {Number} offset
 * @returns {Object} position
 */
export function computedLocation (el, target, parent, offset, dock) {
  let position = {}

  const { margin } = getLocation(target, parent)
  const eRect = el.getBoundingClientRect()
  const dockQuque = dock && dock.length ? dock : DEFAULT_DOCK
  const locationQuque = Object.keys(margin)
    .map(key => {
      const location = margin[key]

      const index = dockQuque.indexOf(location.dock)
      // 计算显示方向权重
      location.weight = index > -1 ? DEFAULT_DOCK.length - index : DEFAULT_DOCK.length - dockQuque.length

      if (location.size > eRect[location.computed] + offset) {
        location.weight++
      }
      else {
        location.weight--
      }
      return location
    })

  const fristLocation = locationQuque.sort((a, b) => b.weight - a.weight)[0]

  position.x = fristLocation.mid.x + computedOffset(fristLocation, eRect, offset).x
  position.y = fristLocation.mid.y + computedOffset(fristLocation, eRect, offset).y

  return position
}

/**
 * 计算偏移量
 *
 * @param {Object} location
 * @param {Object} eRect
 * @param {Object} offset
 * @returns {Object} position
 */
function computedOffset (location, eRect, offset) {
  let position = {}

  position.x = location.dock === POSITION.top ? -eRect.width / 2 :
               location.dock === POSITION.right ? offset :
               location.dock === POSITION.bottom ? -eRect.width / 2 :
               location.dock === POSITION.left ? -eRect.width - offset : 0

  position.y = location.dock === POSITION.top ? -eRect.height - offset :
               location.dock === POSITION.right ? -eRect.height / 2 :
               location.dock === POSITION.bottom ? offset : 
               location.dock === POSITION.left ? -eRect.height / 2 : 0

  return position
}

/**
 * 防抖函数
 * @param {Function} func
 * @param {Number} wait
 * @param {Boolean} immediate
 */
export function debounce(func, wait, immediate) {
    let timeout
    return () => {
      let context = this, args = arguments
      let later = () => {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    let callNow = immediate & !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

/**
 * 相对于容器绝对定位
 *
 * @param {Element} el 元素对象
 * @param {Element} parent 父级容器
 * @param {String} dock 停靠位置
 * @returns {Object} position 返回绝对定位的位置对象
 */
export function absolutePosition (el, parent, offset, dock) {
  if (!el) throw console.error('属性 {el} 不能为空')
  if (!parent) throw console.error('属性 {parent} 不能为空')
  if (!dock) dock = POSITION.top

  let elRect = el.getBoundingClientRect()
  let parentRect = parent.getBoundingClientRect()

  let centerX = (parentRect.width - elRect.width) / 2
  let centerY = (parentRect.height - elRect.height) / 2

  // 计算 8 个位置的绝对坐标
  let position = {
    top: { x: centerX, y: parentRect.top },
    left: { x: parentRect.left, y: centerY },
    right: { x: parentRect.left + parentRect.width, y: centerY },
    bottom: { x: centerX, y: parentRect.top + parentRect.height },
    'left-top': { x: parentRect.left, y: parentRect.top },
    'right-top': { x: parentRect.left + parentRect.width, y: parentRect.top},
    'left-bottom': { x: parentRect.left, y: parentRect.top + parentRect.height},
    'right-bottom': { x: parentRect.left + parentRect.width, y: parentRect.top + parentRect.height},
    middle: { x: parentRect.left + centerX, y: parentRect.top + centerY }
  }

  // 计算 8 个位置不同的偏移量
  let positionOffset = {
    x: dock.indexOf(POSITION.left) !== -1 ? offset :
       dock.indexOf(POSITION.right) !== -1 ? -offset-elRect.width : 0,
    y: dock.indexOf(POSITION.top) !== -1 ? offset :
       dock.indexOf(POSITION.bottom) !== -1 ? -offset-elRect.height : 0
  }

  let result = {
    x: position[dock].x + positionOffset.x,
    y: position[dock].y + positionOffset.y,
    width: elRect.width,
    height: elRect.height
  }

  return result
}

