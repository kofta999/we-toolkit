import axios, { AxiosResponse } from "axios";
import { ILoginRes } from "../types/loginRes";
import { resData } from "../types/resData";

export const sendAuthRequest = async (URL: string, authData: ILoginRes) => {
  const headers = {
    Jwt: authData.token,
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
    Host: "api-my.te.eg",
    Origin: "https://my.te.eg",
    Referer: "https://my.te.eg/",
    "Content-Type": "application/json",
  };

  const body = {
    header: {
      customerId: authData.customerId,
      msisdn: authData.number,
      numberServiceType: "FBB",
      locale: "en",
    },
  };

  const res: AxiosResponse<resData, any> = await axios.post(URL, body, {
    headers: headers as any,
  });
  if (res.status !== 200) {
    throw new Error("Error happened while fetching data from WE server");
  }

  return res.data;
};
