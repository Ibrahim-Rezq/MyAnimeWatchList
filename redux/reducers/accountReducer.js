import * as t from '../actions/types';

const accountReducer = (state = 0, action) => {
  switch (action.type) {
    case t.SIGN_IN:
      console.log('SIGNIN');
      return state;

    default:
      console.log('default');
      return state;
  }
};
export default accountReducer;
