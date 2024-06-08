import axiosInstance from './axiosConfig';
import { RootState } from "@/states/store";
import { SurveyType } from "@/@types/order";
import { PaginatedResponse } from "/@/types/pagination";
import { UserType } from "@/@types/user";
import { useSelector } from "react-redux";

export const getSurveys = async (filters: { desde: string, hasta: string, per_page: number, page: number }, user: UserType): Promise<PaginatedResponse<OrderType>> => {
    try {
        const { desde, hasta, per_page, page } = filters;
        const response = await axiosInstance.get(`/feedback/buscar/14-05-2024/61248292`, {
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