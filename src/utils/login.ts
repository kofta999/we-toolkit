import axios from "axios";
import encrypt from "../helpers/passwordEnc";

// Shout out for https://github.com/abdelrahman-tarek-0 for the login functionality
export const login = async (number: string, password: string) => {
  const preTokenUrl =
    "https://api-my.te.eg/api/user/generatetoken?channelId=WEB_APP";
  const loginUrl = "https://api-my.te.eg/api/user/login?channelId=WEB_APP";

  const payload = {
    body: {
      password: encrypt(password),
    },

    header: {
      msisdn: number,
      numberServiceType: "FBB",
      locale: "en",
    },
  };

  const headers = {
    Jwt: "",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
    Host: "api-my.te.eg",
    Origin: "https://my.te.eg",
    Referer: "https://my.te.eg/",
  };

  const preTokenRes = await axios.get(preTokenUrl);

  if (!preTokenRes?.data?.body?.jwt || !preTokenRes?.data?.body)
    throw new Error("we server is down or not responding");

  const preToken = preTokenRes?.data?.body?.jwt;
  headers.Jwt = preToken;

  let token = await axios.post(loginUrl, payload, {
    headers,
  });

  if (!token?.data?.body?.jwt) throw new Error("wrong password or number");

  const customerId = token?.data?.header?.customerId;
  const customerName = token?.data?.body?.customerName;
  token = token?.data?.body?.jwt;

  return { number, password, token, customerId, customerName };
};
