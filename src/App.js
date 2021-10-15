import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Shop from './components/Shop/Shop';
import Login from './components/Login/Login';
import Register from './Register/Register';
import AuthProvider from './components/Context/AuthProvider';
import Logout from './components/Logout/Logout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Router>
            <Header></Header>
            <Switch>
              <Route exact path="/">
                <Shop></Shop>
              </Route>
              <Route path="/shop">
                <Shop></Shop>
              </Route>
              <Route path="/review">
                <OrderReview></OrderReview>
              </Route>
              <PrivateRoute path="/inventory">
                <Inventory></Inventory>
              </PrivateRoute>
              <PrivateRoute path="/placeorder">
                <PlaceOrder></PlaceOrder>
              </PrivateRoute>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/register">
                <Register></Register>
              </Route>
              <Route path="/logout">
                <Logout></Logout>
              </Route>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
          </Router>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
