import axiosInstance from './axiosConfig';
import { UserType } from '@/@types/user';

export const login = async (credentials: { usuario: string, password: string }): Promise<UserType> => {
  try {
    const response = await axiosInstance.post('/usuarios/login', credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};
