export type CouponType = {
  cupon_id: number;
  cupon_no: string;
  customer_name: string;
  date: string;
  order_id: string;
  status: string;
  sucursal: string;
  telephone: string;
  time: string;
};

export type CouponState = {
  coupons: CouponType[] | null;
  telephone: string | undefined;
  total: number;
  date: string;
  name: string;
  filters: {
    desde: string;
    hasta: string;
    per_page: number;
    page: number;
  };
};
