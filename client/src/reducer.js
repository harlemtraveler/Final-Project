const initialState = {
  users: [],
  isLoading: false,
  saveStatus: 'READY',
  user: {
    user_id: '',
    gender: '',
    first_name: '',
    last_name: '',
    email: '',
    login_name: '',
    login_password: '',
    phone_number: '',
    repo_id: '',
    avatar: ''
  },
  products: [],
  product: {
    product_id: '',
    product_name: '',
    platform: '',
    product_price: '',

  },
};

export function reducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return Object.assign({}, state, {
        isLoading: true
      });
    case FETCH_PRODUCTS_REQUEST:
      return Object.assign({}, state, {
        isLoading: true
      });
    case FETCH_USERS_FAILURE:
      return Object.assign({}, state, {
        isLoading: false
      });
    case FETCH_PRODUCTS_FAILURE:
      return Object.assign({}, state, {
        isLoading: false
      });
    case FETCH_USERS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false
      });
    case FETCH_PRODUCTS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false
      });
    case SAVE_USERS_REQUEST:
      return Object.assign({}, state, {
        saveStatus: 'SAVING'
      });
    case SAVE_PRODUCTS_REQUEST:
      return Object.assign({}, state, {
        saveStatus: 'SAVING'
      });
    case SAVE_USERS_FAILURE:
      return Object.assign({}, state, {
        saveStatus: 'ERROR'
      });
    case SAVE_PRODUCTS_FAILURE:
      return Object.assign({}, state, {
        saveStatus: 'ERROR'
      });
    case SAVE_USERS_SUCCESS:
      return Object.assign({}, state, {
        saveStatus: 'SUCCESS'
      });
    case SAVE_PRODUCTS_SUCCESS:
      return Object.assign({}, state, {
        saveStatus: 'SUCCESS'
      });
    default:
      return state;
  }
}
