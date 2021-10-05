import { combineReducers } from 'redux';

import displayOptionsReducer from './displayOptions';

import userCurrentReducer from './userCurrent';
import userConnectReducer from './userConnect';
import userCreateReducer from './userCreate';
import userUpdateReducer from './userUpdate';

import cardNewReducer from './cardNew';
import cardUpdateReducer from './cardUpdate';
import cardsSearchReducer from './cardsSearch';
import cardsHomeReducer from './cardsHome';

const rootReducer = combineReducers({
  cardsSearch: cardsSearchReducer,
  cardsHome: cardsHomeReducer,
  cardNew: cardNewReducer,
  cardUpdate: cardUpdateReducer,
  displayOptions: displayOptionsReducer,
  userCreate: userCreateReducer,
  userCurrent: userCurrentReducer,
  userConnect: userConnectReducer,
  userUpdate: userUpdateReducer,
});

export default rootReducer;
