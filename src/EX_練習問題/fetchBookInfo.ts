import axios, { AxiosResponse } from "axios";
import { OpenDBResponse } from "./opendbData";

export const fetchBookInfo = () => {
  // APIを取得
  const query = "978-4-8399-7106-9";
  const url = `https://api.openbd.jp/v1/get?isbn=${query}&pretty`;

  const bookInfo = axios(url);
  bookInfo.then((response: AxiosResponse<OpenDBResponse[]>) => {
    const { data, status } = response;
    console.log(
      JSON.stringify(data[0].onix.DescriptiveDetail.TitleDetail.TitleElement)
    );
    console.log(JSON.stringify(data[0].onix.CollateralDetail.TextContent));
  });
};
