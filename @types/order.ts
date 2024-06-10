export type OrderType = {
    compra_id: number | undefined;
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
    desde: string;
    hasta: string;
    per_page: number;
    page: number;
};

export type OrderState = {
    orders: OrderType[] | null;
    telephone: number | string | undefined;
    total: number;
    filters: {
        desde: string;
        hasta: string;
        per_page: number;
        page: number;
        compra_id?: number;
    };
};
