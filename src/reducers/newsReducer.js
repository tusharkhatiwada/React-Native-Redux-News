import { FETCH_API, FETCH_API_SUCCESS, FETCH_API_ERROR } from "../actions/types";

const newsReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_API:
            return { isLoading: true };
        case FETCH_API_SUCCESS:
            return { ...state, articles: action.payload, isLoading: false };
        case FETCH_API_ERROR:
            return { isLoading: false, error: action.payload };
        default:
            return state;
    }
};

export default newsReducer;
