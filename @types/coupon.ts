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
  cupon_id: number;
  filters: {
    desde: string;
    hasta: string;
    per_page: number;
    page: number;
  };
};
