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
