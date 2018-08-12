import { callApi } from './APIService';


// simulate an API CALL to fetch the availability of a car
export const fetchAvailabilityAPI = (endpoint, id) => {
  return new Promise( (resolve, reject) => {
      setTimeout(() => {
        switch (id) {
          case 1:
            resolve({ available: "In Dealership"})
            break;
          case 2:
            resolve({ available: "Out Of Stock" })
            break;
          case 3:
            resolve({ available: "Unavailable" })
            break;
          case 4:
            resolve({ available: "Unavailable" })
            break;
          case 5:
            resolve({ available: "Unavailable" })
            break;
          case 6:
            resolve({ available: "In Dealership"})
            break;
          case 7:
            resolve({ available: "In Dealership"})
            break;
          case 8:
            resolve({ available: "Unavailable" })
            break;
          case 9:
            resolve({ available: "In Dealership"})
            break;
          case 10:
            resolve({ available: "Out Of Stock" })
            break;
          default:
            break;
        }
        // reject({ "error": "error" })
      }, 50)
    }
  )
}

export const fetchAvailability = (id) => {
  return fetchAvailabilityAPI(`api.fancycars.com/v1/availability?id=${id}`, id).then(
    (response) => {
      return { response: response };
    },
    (error) => {
      return { error: error }
    }
  );

  // replace above with the return call below to call a real api instead of
  // the mock response
  // return callApi(`availability?id=${id}`)
}
