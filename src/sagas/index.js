import { take, put, call, fork, select, all } from 'redux-saga/effects';
import * as actions from '../actions';
import * as selectors from '../reducers/selectors';
import * as CarsService from '../services/CarsService';
import * as AvailabilityService from '../services/AvailabilityService';

// load the availability for a particular id
function* loadAvailability(id) {
  yield put(actions.requestAvailability(id));
  const { response, error } = yield call(AvailabilityService.fetchAvailability, id);

  if (response) {
    yield put(actions.receiveAvailability(response));
  } else {
    yield put(actions.receivedAvailabilityError(error));
  }
}

// get all availabilities for each car
function* getAllAvailabilites() {
  const cars = yield select(selectors.getCars);

  if (cars) {
    // fetch all availabilities in order 
    for(let carIndex in cars) {
      yield call(loadAvailability, cars[carIndex].id);
    }
  }
}

// load all the fancy cars
function* loadCars() {
  const { response, error } = yield call(CarsService.fetchCars);

  // get availability of each car once the cars have been fetched
  if (response) {
    yield put(actions.receivedCars(response));
    yield fork(getAllAvailabilites)
  } else {
    yield put(actions.receivedCarsError(error));
  }
}

/* WATCHERS */

// watch for any actions where the fancy cars are being requested
function* watchLoadCars() {
  while(true) {
    yield take(actions.FETCH_CARS_REQUEST)
    yield fork(loadCars)
  }
}

export default function* root() {
  yield all([
    fork(watchLoadCars),
  ])
}
