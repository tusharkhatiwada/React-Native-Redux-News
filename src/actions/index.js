import axios from "axios";

import { FETCH_API, FETCH_API_SUCCESS, FETCH_API_ERROR } from "./types";

export const fetchApi = () => ({
    type: FETCH_API
});

export const fetchApiSuccess = articles => ({
    type: FETCH_API_SUCCESS,
    payload: articles
});

export const fetchApiError = error => ({
    type: FETCH_API_ERROR,
    payload: error
});

export const fetchArticles = (category = "") => {
    return function(dispatch) {
        dispatch(fetchApi());
        return axios
            .get(
                `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=8d98dac05ec947d1b891832495641b49`
            )
            .then(response => {
                const res = response.data.articles;
                console.log("Res: ", res);
                dispatch(fetchApiSuccess(res));
            })
            .catch(err => {
                console.log("Error: ", err);
                dispatch(fetchApiError(err.response));
            });
    };
};
