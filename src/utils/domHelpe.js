/**
 * 根元素
 */
const ROOT = document.body

/**
 * 判断元素是否设置可滚动
 * @param {要判断是否可滚动的元素} el
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
 * @param {指定需要判断的元素} el
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
 * @param {父级元素} parent
 */
export function getMargin (el, parent) {
  if (!el) return

  const eRect = el.getBoundingClientRect()
  const pRect = parent.getBoundingClientRect()
  const { width, height } = eRect
  const { width: pw, height: ph } = pRect

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
        size: top,
        start: vertex.tl,
        mid: { x: midX, y: top },
        end: vertex.tr
      },
      bottom: {
        dock: 'bottom',
        size: ph - bottom,
        start: vertex.bl,
        mid: { x: midX, y: bottom },
        end: vertex.br
      },
      left: {
        dock: 'left',
        size: left,
        start: vertex.tl,
        mid: { x: left, y: midY },
        end: vertex.bl
      },
      right: {
        dock: 'right',
        size: pw - right,
        start: vertex.tr,
        mid: { x: right, y: midY },
        end: vertex.br
      }
    }
  }
}

export function computedPosition (el, target, parent) {
  let x = 0
  let y = 0
  const {margin} = getMargin(target, parent)
  const { width: eWidth } = el.getBoundingClientRect()

  console.info(eWidth)
  x = margin.bottom.mid.x - eWidth / 2
  y = margin.bottom.end.y + 10

  return {
    location: {
      x: x,
      y: y
    }
  }
}
