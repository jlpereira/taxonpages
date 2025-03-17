export function makePagination(headers) {
  return {
    total: Number(headers['pagination-total']),
    per: Number(headers['pagination-per-page']),
    page: Number(headers['pagination-page'])
  }
}
