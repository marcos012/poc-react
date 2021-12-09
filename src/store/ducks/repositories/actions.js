import { RepositoriesTypes } from "./types";

export const loadRequest = (url) => ({
    type: RepositoriesTypes.LOAD_REQUEST,
    url,
});

export const loadSuccess = (data) => ({
    type: RepositoriesTypes.LOAD_SUCCESS,
    data,
});

export const loadFailure = () => ({
    type: RepositoriesTypes.LOAD_FAILURE,
});
