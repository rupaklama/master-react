import { combineReducers } from 'redux';
import { productDetailsReducer } from './productDetailsReducer';

export const rootReducer = combineReducers({
  productDetails: productDetailsReducer,
});

// This is saying we are creating some reducers above,
// telling 'Typescript' to take all those Reducers functions & give us back the
// 'TYPE' of Object whatever the function returns.
// We are going to assign that TYPE to RootState - type alias
export type RootState = ReturnType<typeof rootReducer>;
// Mouse over RootState
// We are going to have an root object - 'global state' with our reducers
