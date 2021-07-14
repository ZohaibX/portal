import { FETCH_CURRENT_USER } from '../actions/index';

//? async reducer function
export const FetchCurrentUserReducer = (state = null, action: any) => {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return action.payload || false;
    default:
      return state;
  }
};
