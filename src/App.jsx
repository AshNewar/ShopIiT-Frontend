import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Cart from "./components/Cart/Cart";
import Shipping from "./components/Cart/Shipping/Shipping";
import Footer from "./components/Footer/footer";
import ConfirmOrder from "./components/Cart/Confirm";
import Success from "./components/Cart/success";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import Profile from "./components/Profile/Profile";
import Dashboard from "./components/admin/dashboard/Dash";
import MyOrders from "./components/admin/dashboard/MyOrders";
import OrderDetails from "./components/admin/dashboard/OrderDetails";
import Orders from "./components/admin/dashboard/Order";
import NotFound from "./components/admin/PageNotFound";
import { useEffect } from "react";
import { loadUser } from "./redux/action/action";
import { useDispatch, useSelector } from "react-redux";
import { toast, Toaster } from "react-hot-toast";
import { ProtectedRoute } from "protected-route-react";
import User from "./components/admin/dashboard/User";

function App() {
  const dispatch = useDispatch();

  const { error, msg, user, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({
        type: "clearError",
      });
    }
    if (msg) {
      toast.success(msg);
      dispatch({
        type: "clearMsg",
      });
    }
  }, [dispatch, error, msg]);

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/success' element={<Success />} />

        <Route
          path="/login"
          element={
            <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/me">
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              redirect='/login'
            />
          }
        >
          <Route path='/me' element={<Profile />} />
          <Route path='/shipping' element={<Shipping />} />
          <Route path='/confirm' element={<ConfirmOrder />} />
          <Route path='/myorders' element={<MyOrders />} />
          <Route path='/order/:id' element={<OrderDetails />} />
        </Route>
        <Route
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              adminRoute={true}
              isAdmin={user && user.role === "admin"}
              redirectAdmin='/me'
            />
          }
        >
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path="/admin/users" element={<User/>} />
          <Route path='/admin/orders' element={<Orders />} />
        </Route>
        <Route path='/pageerror' element={<NotFound />} />
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;
