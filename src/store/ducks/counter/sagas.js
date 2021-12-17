import { call, put } from "redux-saga/effects";
import { getRandomNumber } from "./actions";

const API_URL = 'https://cors-anywhere.herokuapp.com/http://www.randomnumberapi.com/api/v1.0/random';

const getNumber = async () => {
  const response = await fetch(API_URL, {
    method: "GET",
  });

  return await response.json();
};
  
export function* randomNumber() {
    try {
        const response = yield call(getNumber)

        yield put(getRandomNumber(response[0])); 
    } catch (error) {
        console.log(error);
    }
}