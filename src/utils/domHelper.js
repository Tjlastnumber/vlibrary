/* eslint-disable */

const ROOT = document.body
const DEFAULT_DOCK = ['bottom', 'top', 'right', 'left']

/**
 * 判断元素是否设置可滚动
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
        dock: 'top',
        computed: 'height',
        size: top,
        start: vertex.tl,
        mid: { x: midX, y: top },
        end: vertex.tr
      },
      bottom: {
        dock: 'bottom',
        computed: 'height',
        size: ph - bottom,
        start: vertex.bl,
        mid: { x: midX, y: bottom },
        end: vertex.br
      },
      left: {
        dock: 'left',
        computed: 'width',
        size: left,
        start: vertex.tl,
        mid: { x: left, y: midY },
        end: vertex.bl
      },
      right: {
        dock: 'right',
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
 * @param {Element} el
 * @param {Element} target
 * @param {Element} parent
 * @param {Number} offset
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
 * @param {Number} offset
 */
function computedOffset (location, eRect, offset) {
  let position = {}

  position.x = location.dock === 'top' ? -eRect.width / 2 :
               location.dock === 'right' ? offset :
               location.dock === 'left' ? -eRect.width - offset :
               location.dock === 'bottom' ? -eRect.width / 2 : 0

  position.y = location.dock === 'top' ? -eRect.height - offset :
               location.dock === 'right' ? -eRect.height / 2 :
               location.dock === 'left' ? -eRect.height / 2 :
               location.dock === 'bottom' ? offset : 0

  return position
}

/**
 * 防抖函数
 * @param {Func} func
 * @param {Number} wait
 * @param {Boolean} immediate
 */
export function debounce(func, wait, immediate) {
    let timeout
    return function() {
      let context = this, args = arguments
      let later = function() {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    let callNow = immediate & !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}
