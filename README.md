This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

To get started run the following commands

```
npm install
npm run start
```
Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

---

### Application Walkthrough
![alt text](https://github.com/tonycen23/fancycars/blob/master/system.png?raw=true "System Graph")

When the app starts, the Home component dispatches a load car request. A saga watching for the load car request actions, will call the api to fetch the fancy cars. After successfully fetching the fancy cars, a success action is dispatched and will update the store with the new fancy cars. In addition, the saga will fetch the availability of each car in order and will update the store again. Once the fancy cars and their availabilities are fetched, they are rendered on to the Home component. The user can then sort the fancy cars which will dispatch another action. A selector has been used to get the cars and their availability in order depending on the filter method from the store.

### Libraries Used
* Redux
* Redux Saga
* Reselect
