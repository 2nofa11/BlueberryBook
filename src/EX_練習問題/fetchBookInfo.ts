import axios from "axios";

export const fetchBookInfo = () => {
  // APIを取得
  const query = "978-4101152097";
  const url = `https://api.openbd.jp/v1/get?isbn=${query}&pretty`;

  const bookInfo = axios(url);
  bookInfo.then((response) => {
    console.log(response.data);
  });
};
