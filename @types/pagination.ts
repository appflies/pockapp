export interface PaginatedResponse {
    current_page: number;
    per_page: number;
    rows: OrderType[];
    total: number;
}