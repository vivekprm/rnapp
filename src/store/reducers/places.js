import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes';

const initialState = {
    places: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE: 
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random(),
                    name: action.placeName,
                    image: {
                       uri: 'https://res-4.cloudinary.com/enchanting/images/w_1600,h_700,c_fill/et-web/2015/05/Enchanting-Travels-Seychelles-Tours-Denis-Island-Resort-Aerial-view/seychelles-tours-trips-1.jpg'
                    }
                })
            };
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => {
                    return place.key !== action.placeKey;
                }),
                selectedPlace: null
            };
        default:
            return state;
    }
}

export default reducer;