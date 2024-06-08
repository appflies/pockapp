import axiosInstance from './axiosConfig';
import { RootState } from "@/states/store";
import { OrderType } from "@/@types/order";
import { PaginatedResponse } from "/@/types/pagination";
import { UserType } from "@/@types/user";
import { useSelector } from "react-redux";

export const getOrders = async (filters: { desde: string, hasta: string, per_page: number, page: number }, user: UserType): Promise<PaginatedResponse<OrderType>> => {
    try {
        const { desde, hasta, per_page, page } = filters;
        const response = await axiosInstance.get(`/pago/buscar/${desde}/${hasta}/${per_page}/${page}`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
            sucursal: user.sucursal,
          }
        });
        return response.data;
    } catch (error) {
      throw error;
    }
};