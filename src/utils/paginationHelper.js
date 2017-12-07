export default function pagination (data, currentPage, pageSize) {
  const total = data.length
  const minSize = (currentPage - 1) * pageSize
  const maxSize = currentPage * pageSize

  return {
    list: data.slice(minSize, maxSize),
    total: total
  }
}
