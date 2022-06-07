import axios from "axios";

const client = axios.create();
const DB_URL = "https://agile-bastion-92111.herokuapp.com";
export const getList = async () => {
  try {
    return await client.get(DB_URL + "/api/list");
  } catch (e) {
    return e;
  }
};

export const writePost = async (data) => {
  try {
    return await client.post(DB_URL + "/api/post", data);
  } catch (e) {
    return e;
  }
};

export const getContent = async (num) => {
  try {
    return await client.get(DB_URL + "/api/page/" + num);
  } catch (e) {
    return e;
  }
};

export default client;
