import axios from 'axios';
import { LoginInput } from '../pages/login.page';
import { RegisterInput } from '../pages/register.page';
import { ResetPasswordInput } from '../pages/resetpassword.page';
import { GenericResponse, ILoginResponse, IUserResponse } from './types';

const BASE_URL = 'http://localhost:8080/api/cluster';

export const clusterApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

authApi.defaults.headers.common['Content-Type'] = 'application/json';

export const getClusterFn = async (clusterId: string) => {
  const response = await clusterApi.get<GenericResponse>(`${clusterId}`);
  return response.data;
};
