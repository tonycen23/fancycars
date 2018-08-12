export const FETCH_CARS_REQUEST = 'FETCH_CARS_REQUEST';
export const FETCH_CARS_SUCCESS = 'FETCH_CARS_SUCCESS';
export const FETCH_CARS_FAILURE = 'FETCH_CARS_FAILURE';

export const FETCH_AVAILABILITY_REQUEST = 'FETCH_AVAILABILITY_REQUEST';
export const FETCH_AVAILABILITY_SUCCESS = 'FETCH_AVAILABILITY_SUCCESS';
export const FETCH_AVAILABILITY_FAILURE = 'FETCH_AVAILABILITY_FAILURE';

export const SET_CARS_FILTER = 'SET_FILTER';

export const requestCars = () => ({
  type: FETCH_CARS_REQUEST
});

export const receivedCars = (payload) => ({
  type: FETCH_CARS_SUCCESS,
  payload: payload
});

export const receivedCarsError = (error) => ({
  type: FETCH_CARS_FAILURE,
  error: error
});

export const requestAvailability = (id) => ({
  type: FETCH_AVAILABILITY_REQUEST,
  id: id
});

export const receiveAvailability = (payload) => ({
  type: FETCH_AVAILABILITY_SUCCESS,
  payload: payload
})

export const receivedAvailabilityError = (error) => ({
  type: FETCH_AVAILABILITY_FAILURE,
  error: error
})

export const setCarsFilter = (filterType) => ({
  type: SET_CARS_FILTER,
  payload: filterType
})
