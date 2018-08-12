import { createSelector } from 'reselect';
import { filterTypes } from '../utils/filterTypes';
import { availabilityTypes } from '../utils/availabilityTypes';

export const getCars = state => state.cars;
export const getAvailabilities = state => state.availabilities;
export const getFilterType = state => state.filterType;

export const getCarsAndAvailabilties = createSelector(
  getCars,
  getAvailabilities,
  getFilterType,
  (cars, availabilities, filterType) => {
    let carsWithAvailabilities = undefined;

    // return the fancy cars and their availability
    if (cars && availabilities && cars.length === availabilities.length) {
      carsWithAvailabilities = cars.map((car, index) => {
        return { ...car, ...availabilities[index] }
      })
    }

    // if sorting is applied
    if (filterType) {
      switch (filterType) {
        case filterTypes.nameASC:
          carsWithAvailabilities.sort((a, b) => {
            let nameA = a.name.toUpperCase();
            let nameB = b.name.toLocaleUpperCase();

            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }

            return 0
          })
          break;
        case filterTypes.nameDSC:
          carsWithAvailabilities.sort((a, b) => {
            let nameA = a.name.toUpperCase();
            let nameB = b.name.toLocaleUpperCase();

            if (nameA < nameB) {
              return 1;
            }
            if (nameA > nameB) {
              return -1;
            }

            return 0
          })
          break;
        case filterTypes.availability:
          carsWithAvailabilities.sort((a, b) => {
            let availabilityA = a.available;
            let availabilityB = b.available;

            if (availabilityA === availabilityTypes.available) {
              return -1;
            }

            if (availabilityB === availabilityTypes.available) {
              return 1;
            }

            return 0
          })
          break;
        default:
          break;
      }
    }

    return carsWithAvailabilities
  }
)
