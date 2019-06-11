import {
    CHANGE_SEARCH_FIELD,
    REQUEST_BREEDS_PENDING,
    REQUEST_BREEDS_SUCCESS,
    REQUEST_BREEDS_FULL_SUCCESS,
    REQUEST_BREEDS_FAILED
} from './constants.js';

const initialStateSearch ={
    searchField: ''
}

const initialStateBreeds ={
    breeds: [],
    error: '',
    isPending: false,
    isPendingImages: false
}


export const searchBreeds = (state=initialStateSearch, action={}) => {
    switch(action.type){
            case CHANGE_SEARCH_FIELD:
                return Object.assign({}, state, { searchField: action.payload});
            default:
                return state;
    }
}

export const requestBreeds = (state=initialStateBreeds, action={}) => {
    switch(action.type){
            case REQUEST_BREEDS_PENDING:
                return Object.assign({}, state, { isPending: true, isPendingImages: true });
            case REQUEST_BREEDS_SUCCESS:
                return Object.assign({}, state, { breeds: action.payload, isPending: false, isPendingImages: true});
            case REQUEST_BREEDS_FULL_SUCCESS:
                return Object.assign({}, state, { breeds: action.payload, isPending: false, isPendingImages: false});
            case REQUEST_BREEDS_FAILED:
                return Object.assign({}, state, { error: action.payload, isPending: false, isPendingImages: true});
            default:
                return state;
    }
}