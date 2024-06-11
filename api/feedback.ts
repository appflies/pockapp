import axios from 'axios';
import { CouponType } from "@/@types/coupon";
import { UserType } from "@/@types/user";

export const getFeedback = async (filters: { desde: string, hasta: string, per_page: number, page: number }, user: UserType): Promise<CouponType[]> => {
  try {
    const { desde, hasta, per_page, page } = filters;
    const response = await axios.get(`https://nicoservices.clobitech.com/cupon/buscar/${desde}/${hasta}/${per_page}/${page}`, {
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

export const RedeemCoupon = async (cupon_id: string, user: UserType): Promise<CouponType[]> => {
    try {
        const response = await axios.put(`https://nicoservices.clobitech.com/cupon/canjear/${cupon_id}`, {}, {
            headers: {
                'Authorization': `Bearer ${user.token}`,
                'Content-Type': 'application/json; charset=UTF-8',
                'sucursal': user.sucursal,
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error redeeming coupon:', error);
        throw error;
    }
};
