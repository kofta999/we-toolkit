import { ILoginRes } from "../types/loginRes";
import { sendAuthRequest } from "../helpers/sendAuthRequest";

export const getUsage = async (authData: ILoginRes) => {
  const usageUrl = "https://api-my.te.eg/api/line/freeunitusage";
  const data = await sendAuthRequest(usageUrl, authData);

  // res.data.body.detailedLineUsageList
  return data.body;
};
