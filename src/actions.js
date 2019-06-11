import {
    CHANGE_SEARCH_FIELD,
    REQUEST_BREEDS_PENDING,
    REQUEST_BREEDS_SUCCESS,
    REQUEST_BREEDS_FULL_SUCCESS,
    REQUEST_BREEDS_FAILED
} from './constants.js';

const fetchImage = async (breed) => {
    return await fetch('https://api.thecatapi.com/v1/images/search?breed_ids=' + breed)
                    .then(res => res.json()).then(image => image[0].url)
}

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestBreeds = () => (dispatch) => {
    dispatch({ type: REQUEST_BREEDS_PENDING});
    fetch('https://api.thecatapi.com/v1/breeds')
            .then(response => response.json())
            .then(breeds => {
                        let count = 0;
                        breeds.map( breed => {
                            return Promise.resolve(fetchImage(breed.id))
                                .then(cat => {
                                    breed.url = cat;
                                    count++;
                                    if (breeds.length === count){
                                        dispatch({ type: REQUEST_BREEDS_FULL_SUCCESS, payload: breeds})
                                    }
                            });
                        })
                dispatch({ type: REQUEST_BREEDS_SUCCESS, payload: breeds})
            })
            .catch(error => dispatch({ type: REQUEST_BREEDS_FAILED, payload: error }))
}