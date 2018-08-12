import * as actions from '../actions';

const initialState = {
  cars: undefined,
  availabilities: [],
  filterType: undefined,
  error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_CARS_SUCCESS:
      return { ...state, cars: action.payload, error: undefined }
    case actions.FETCH_AVAILABILITY_SUCCESS:
      return { ...state, availabilities: [...state.availabilities, action.payload], error: undefined};
    case actions.SET_CARS_FILTER:
      return { ...state, filterType: action.payload }
    case actions.FETCH_CARS_FAILURE:
      return { ...state, error: true }
    case actions.FETCH_AVAILABILITY_FAILURE:
      return { ...state, error: true }
    default:
      return state;
  }
}
