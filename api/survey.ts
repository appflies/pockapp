import axiosInstance from './axiosConfig';
import { RootState } from "@/states/store";
import { SurveyType } from "@/@types/order";
import { PaginatedResponse } from "/@/types/pagination";
import { UserType } from "@/@types/user";
import { useSelector } from "react-redux";

export const getSurveys = async (fecha: string, telephone: string, user: UserType): Promise<PaginatedResponse<SurveyType>> => {
    try {
        const response = await axiosInstance.get(`/feedback/buscar/${fecha}/${telephone}`, {
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
