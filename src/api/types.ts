export interface IUser {
  name: string;
  email: string;
  role: string;
  photo: string;
  _id: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface GenericResponse {
  status: string;
  message: string;
}

export interface ILoginResponse {
  status: string;
  access_token: string;
}

export interface IUserResponse {
  status: string;
  data: {
    user: IUser;
  };
}

export interface IClusterMultiResponse {
  status: string;
  results: number;
  data: ICluster[];
}

export interface IClusterResponse {
  status: string;
  data: ICluster;
}

export interface ICluster {
  name: string;
  api_server_host: string;
  api_server_port: string;
  added_by: string;
  _id: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
