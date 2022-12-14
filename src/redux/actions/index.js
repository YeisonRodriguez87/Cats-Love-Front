import axios from "axios";
import { GET_CATS, FILTER_CATS_BY_SEX, ORDER_CATS, CAT_DETAIL } from "./type";

export function getCats() {
  return async function (distpach) {
    try {
      const cats = await axios.get("https://cats-love-back.herokuapp.com/cats/");
      return distpach({
        type: GET_CATS,
        payload: cats.data,
      });
    } catch (error) {
      return error;
    }
  };
}

export function filterCatsBySex(payload) {
  return {
    type: FILTER_CATS_BY_SEX,
    payload
  };
}

export const orderCats = (payload) => {
  return {
    type: ORDER_CATS,
    payload,
  };
};

export function getDetailsCat(id) {
  return async function (distpach) {
    try {
      const catId = await axios.get(
        `https://cats-love-back.herokuapp.com/cats/${id}`
      );
      return distpach({
        type: CAT_DETAIL,
        payload: catId.data,
      });
    } catch (error) {
      return error;
    }
  };
}


export function postCat(payload) {
  return async function (dispatch) {
    const newCat = await axios.post("https://cats-love-back.herokuapp.com/cats/", payload);
    return newCat;
  };
}
