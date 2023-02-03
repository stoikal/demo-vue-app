export type ListResponse<T = unknown> = {
  data: T[]
  currentPage: number
  totalDocumentCount: number
  totalPages: number
}
