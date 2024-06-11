import axios from 'axios';
import { CouponType } from "@/@types/coupon";
import { UserType } from "@/@types/user";

export const getCoupons = async (filters: { desde: string, hasta: string, per_page: number, page: number }, user: UserType): Promise<CouponType[]> => {
  try {
    const { desde, hasta, per_page, page } = filters;
    const response = await axios.get(`https://nicoservices.clobitech.com/pago/buscar/${desde}/${hasta}/${per_page}/${page}`, {
      headers: {
        'Authorization': `Bearer ${user.token}`,
        'Content-Type': 'application/json; charset=UTF-8',
        'sucursal': user.sucursal,
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch coupons');
  }
};