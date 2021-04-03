import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

// redux dev tool
import { composeWithDevTools } from 'redux-devtools-extension';

import HomePage from './containers/home/HomePage';
import AllProductsPage from './containers/products/AllProductsPage';
import CheckoutPage from './containers/checkout/CheckoutPage';
import { ROUTE } from './constants/route';
import HeaderNavigation from './components/headerNavigation/HeaderNavigation';
import { rootReducer } from './store/reducers';
import startRootSaga from './store/sagas/rootSaga';
import ProductDetailsAction from './store/actions/productDetailsAction';

// declare initial Global state object
const initialState = {};

// saga middleware
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

// STORE is the collections of different Reducers & global state object.
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

// NOTE: After applyMiddleware gets called, we are going to run & add in all our Sagas
sagaMiddleware.run(startRootSaga); // to run our root saga

// dispatch an action to test
store.dispatch({ type: ProductDetailsAction.FETCH_PRODUCTS_DETAILS });
// to access store
(window as any).shopspree = store;

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <HeaderNavigation />
        <Switch>
          <Route exact path={ROUTE.HOME} component={HomePage} />
          <Route exact path={ROUTE.ALL_PRODUCTS} component={AllProductsPage} />
          <Route exact path={ROUTE.CHECKOUT} component={CheckoutPage} />
          <Redirect to={ROUTE.HOME} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
