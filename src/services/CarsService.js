import { callApi } from './APIService';

// simulate an API CALL to fetch all the fancy cars,
export const fetchCarsAPI = (endpoint) => {
  return new Promise( (resolve, reject) => {
      setTimeout(() => {
        resolve(
          [
            { id: 1, img: require("../assets/images/car1.jpg"), name: "McLaren 570S", make: "McLaren", model: "570S", year: 2018 },
            { id: 2, img: require("../assets/images/car2.jpg"), name: "Mazda MX-5", make: "Mazda", model: "MX-5", year: 2018 },
            { id: 3, img: require("../assets/images/car3.jpg"), name: "Porsche 911 Carrera GTS", make: "Porsche", model: "911", year: 2018 },
            { id: 4, img: require("../assets/images/car4.jpg"), name: "BMW M4 Competition Pack", make: "BMW", model: "M4", year: 2018 },
            { id: 5, img: require("../assets/images/car5.jpg"), name: "Mercedes-AMG C63 Coupe", make: "Mercedes", model: "C63", year: 2018 },
            { id: 6, img: require("../assets/images/car6.jpg"), name: "Audi RS 5 Coupe", make: "Audi", model: "RS 5 Coupe", year: 2018 },
            { id: 7, img: require("../assets/images/car7.jpg"), name: "Porsche Cayman/Boxster", make: "Porsche", model: "Cayman", year: 2018 },
            { id: 8, img: require("../assets/images/car8.jpg"), name: "Fiat 124 Spider", make: "Fiat", model: "124", year: 2018 },
            { id: 9, img: require("../assets/images/car9.jpg"), name: "Nissan GT-R", make: "Nissan", model: "GT-R", year: 2018 },
            { id: 10, img: require("../assets/images/car10.jpg"), name: "Jaguar F-Type", make: "Jaguar", model: "F-Type", year: 2018 }
          ]
        )
        // reject("error")
      }, 100)
    }
  )
}

export const fetchCars = () => {
  return fetchCarsAPI('api.fancycars.com/v1/cars').then(
    (response) => {
      return { response: response };
    },
    (error) => {
      return { error: error }
    }
  );

  // replace above with the return call below to call a real api instead of
  // the mock response
  // return callApi('cars')
}
