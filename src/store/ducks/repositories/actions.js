import { RepositoriesTypes } from "./types";

export const loadRequest = () => ({
    type: RepositoriesTypes.LOAD_REQUEST,
});

export const loadSuccess = (data) => ({
    type: RepositoriesTypes.LOAD_SUCCESS,
    data,
});

export const loadFailure = () => ({
    type: RepositoriesTypes.LOAD_FAILURE,
});
