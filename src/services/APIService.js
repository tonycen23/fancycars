import fetch from 'isomorphic-fetch';

const API_ROOT = 'https://api.fancycars.com/v1/'

export const callApi = (endpoint, schema) => {
  const fullUrl = `${API_ROOT}${endpoint}`

  return fetch(fullUrl)
    .then(response =>
      response.json().then(json => ({ json, response }))
    ).then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json)
      }

      return json
    })
    .then(
      response => ({response}),
      error => ({error: error.message || 'Something bad happened'})
    )

}
