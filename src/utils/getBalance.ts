import { ILoginRes } from "../types/loginRes";
import { sendAuthRequest } from "../helpers/sendAuthRequest";

export const getBalance = async (authData: ILoginRes) => {
  const balanceUrl = "https://api-my.te.eg/api/line/balance";
  const data = await sendAuthRequest(balanceUrl, authData);

  return data.body;
};
