import { FETCH_ALL_ACCOUNTS} from '../actions/index';

//? async reducer function
export const FetchAllAccounts = (state = null, action: any) => {
  switch (action.type) {
    case FETCH_ALL_ACCOUNTS:
      return action.payload || false;
    default:
      return state;
  }
};
