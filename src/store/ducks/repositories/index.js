import { RepositoriesTypes } from "./types";

const INITIAL_STATE = {
    data: [],
    error: false,
    loading: false
};


const repositories = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RepositoriesTypes.LOAD_REQUEST:
            return { ...state, loading: true };
        case RepositoriesTypes.LOAD_SUCCESS:
            return { ...state, loading: false, error: false, data: action.data };
        case RepositoriesTypes.LOAD_FAILURE:
            return { ...state, loading: false, error: true, data: [] };
        default:
            return state;
    }
}

export default repositories;