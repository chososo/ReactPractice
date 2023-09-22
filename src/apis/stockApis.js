import axios from "axios";
/** 해외 주식 이벤트 리스트 GET API 호출 */
/** 비동기 : 알아서 동기:순차적으로  */
// const SERVER_URL = "http://localhost:3001";
const SERVER_URL="https://raw.githubusercontent.com/congchu/shinhan-front/main/src/data/db.json";
export const getStockEventList = async () => {
//    return axios
//     .get(`${SERVER_URL}/globalStockEvents`).then((response => response.data));
return axios
     .get(`${SERVER_URL}`).then((response => response.data.globalStockEvents));
};