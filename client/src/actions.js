// Handles initial fetch request:
export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
function fetchUsersRequest() {
  return{type: FETCH_USERS_REQUEST};
}

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
function fetchProductsRequest() {
  return{type: FETCH_PRODUCTS_REQUEST};
}

// Fetch request error handling:
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
function fetchUsersFailure(error) {
  return {type: FETCH_USERS_FAILURE, error};
}

export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
function fetchProductsFailure(error) {
  return {type: FETCH_PRODUCTS_FAILURE, error};
}

// Successful fetch request response:
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
function fetchUsersSuccess(users) {
  return{type: FETCH_USERS_SUCCESS, users};
}

export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
function fetchProductsSuccess(products) {
  return{type: FETCH_PRODUCTS_SUCCESS, products};
}

/*
  Below are asynchronous functionsto fetch data
  for both 'users' and 'products'.
*/
export function fetchUsers() {
  return function(dispatch) {
    dispatch(fetchUsersRequest())
    apiClient.loadUsers().then((users) => {
      dispatch(fetchUsersSuccess(users))
    })
  }
}

export function fetchProducts() {
  return function(dispatch) {
    dispatch(fetchProductsRequest())
    apiClient.loadProducts().then((products) => {
      dispatch(fetchProductsSuccess(products))
    })
  }
}

// Saves actions to the server:
export function SAVE_USERS_REQUEST = 'SAVE_USERS_REQUEST';
function saveUsersRequest() {
  return {type: SAVE_USERS_REQUEST};
}

export function SAVE_PRODUCTS_REQUEST = 'SAVE_PRODUCTS_REQUEST';
function saveProductsRequest() {
  return {type: SAVE_PRODUCTS_REQUEST};
}

// Save error handling:
export function SAVE_USERS_FAILURE = 'SAVE_USERS_FAILURE';
function saveUsersFailure(error) {
  return {type: SAVE_USERS_FAILURE, error};
}

export function SAVE_PRODUCTS_FAILURE = 'SAVE_PRODUCTS_FAILURE';
function saveProductsFailure(error) {
  return {type: SAVE_PRODUCTS_FAILURE, error};
}

//Successful save response:
export function SAVE_USERS_SUCCESS = 'SAVE_USERS_SUCCESS';
function saveUsersSuccess(users) {
  return {type: SAVE_USERS_SUCCESS, users};
}

export function SAVE_PRODUCTS_SUCCESS = 'SAVE_PRODUCTS_SUCCESS';
function saveProductsSuccess(products) {
  return {type: SAVE_PRODUCTS_SUCCESS, products};
}

/*
  Below are asynchronous functionsto save data
  for both 'users' and 'products'.
*/

export function saveUsers(users) {
  return function(dispatch) {
    dispatch(saveUsersRequest())
    apiClient.saveUsers(users)
    .then((resp) => {
      dispatch(saveUsersSuccess(users))
    .catch((err) => {
      dispatch(saveUsersFailure(err))
    })
    })
  }
}

export function saveProducts(products) {
  return function(dispatch) {
    dispatch(saveProductsRequest())
    apiClient.saveProducts(products)
    .then((resp) => {
      dispatch(saveProductsSuccess(products))
    .catch((err) => {
      dispatch(saveProductsFailure(err))
    })
    })
  }
}

/*
  Defines the API client
*/

const apiClient = {
  loadUsers: function() {
    return {
      then: function(cb) {
        setTimeout(() => {
          cb(JSON.parse(localStorage.users || '[]'))
        }, 1000);
      }
    }
  },
  saveUsers: function(users) {
    const success = !!(this.count++ % 2);
    return new Promise(function(resolve, reject) {
      setTimeout(() => {
        if (!success) return reject ({success});
        localStorage.users = JSON.stringify(users);
        resolve ({success});
      }, 1000);
    })
  },
  count: 1
}

/*
  Below functions are for potential state management.
*/
export const SORT_USERS = 'SORT_USERS';
function sortUsers() {
  return{type: SORT_USERS};
}

export const ADD_USER = 'ADD_USER';
function addUser() {
  return{type: ADD_USER};
}

export const EDIT_USER = 'EDIT_USER';
function editUser() {
  return{type: EDIT_USER};
}

export const REMOVE_USER = 'REMOVE_USER';
function removeUser() {
  return{type: REMOVE_USER};
}

export const SORT_PRODUCTS = 'SORT_PRODUCTS';
function sortProducts() {
  return{type: SORT_PRODUCTS};
}

export const ADD_PRODUCT = 'ADD_PRODUCT';
function addProduct() {
  return{type: ADD_PRODUCT};
}

export const EDIT_PRODUCT = 'EDIT_PRODUCT';
function editProduct() {
  return{type: EDIT_PRODUCT};
}

export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
function removeProduct() {
  return{type: REMOVE_PRODUCT};
}
