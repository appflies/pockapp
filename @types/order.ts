export interface OrderType {
    compra_id: number;
    customer_name: string;
    date: string;
    mesa: string;
    mesero: string;
    monto: string;
    order_id: string;
    score: number;
    sucursal: string;
    telephone: string;
    ticket: number;
    time: string;
}

export interface PaginatedOrdersResponse {
    current_page: number;
    per_page: number;
    rows: OrderType[];
    total: number;
}
