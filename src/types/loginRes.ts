import { AxiosResponse } from "axios";

export interface ILoginRes {
  number: string;
  password: string;
  token: AxiosResponse<any, any>;
  customerId: string;
  customerName: string;
}
