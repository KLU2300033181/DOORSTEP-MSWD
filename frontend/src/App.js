import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Payment from './Components/Payment';
import Register from './Components/Register';
//import Search from './Components/Search';
//import Profile from './Components/Profile';
//import About from './Components/About';
import Login from './Components/Login';
import Logout from './Components/Logout';
//import History from './Components/History';
import Order from './Components/Order';
import Track from './Components/Track';
//import Products from './Components/Products';
import User from './Components/User';
//import RecipeReviewCard from './Components/RecipeReviewCard';
//import PasskeySignInPage from './Components/PasskeySignInPage';
//import ResponsiveAppBar from './Components/ResponsiveAppBar';
//import ProductsCard from './Components/ProductsCard';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import ProductsCard from './Components/ProductsCard';
import Welcome from './Components/Welcome';
import ApiProducts from './Components/ApiProducts';
import Profile from './Components/Profile';
import ProductsList from './Components/ProductsList';
import Catalog from './Components/Catalog';
//import Navbar from './Components/Navbar';
//import Navbar from './Components/Navbar';
import Document from './Components/Document';
import Video from './Components/Video';
import OrderList from './Components/OrderList';
import ProductMList from './Components/ProductMList';
import UserMList from './Components/UserMList';
import JWTLogin from './Components/JWTLogin';
import JWTDashboard from './Components/JWTDashboard';
import AuthContext from './context/AuthContext';
import JWTRegister from './Components/JWTRegister';
import FeedbackForm from './Components/FeedBackForm';
import QRCodeViewer from './Components/QRCodeViewer';

function App() {
  const orderDetails=[
    {"oid":11, "oname":"rama", "odate":"06-JAN-25", "ostatus":'dispatched',"dboy":"hari"},
    {"oid":22, "oname":"sita", "odate":"06-JAN-25", "ostatus":'packed',"dboy":"ravi"},
    {"oid":33, "oname":"hanuman", "odate":"06-JAN-25", "ostatus":'delivered',"dboy":"lakshmi"},
    {"oid":44, "oname":"lakshmana", "odate":"06-JAN-25", "ostatus":'packed',"dboy":"mandavi"},
    {"oid":55, "oname":"oormila", "odate":"06-JAN-25", "ostatus":'dispatched',"dboy":"sruthakeerthi"}
  ]


  const ProtectedRoute = ({ children, role }) => {
    const { user } = useContext(AuthContext);
    if (!user) return <Navigate to="/login" />;
    if (role && user.role !== role) return <Navigate to="/" />;
    return children;
  };


  return (
    
    <Router>
<Navbar> </Navbar>

      <Routes>

        <Route path='/jwtlogin' element={<JWTLogin />} />
        <Route
        path="/jwtdashboard"
        element={
          <ProtectedRoute role="admin">
            <JWTDashboard />
          </ProtectedRoute>
        }
      />






        <Route path='/UsersList' element={<UserMList />} />
        <Route path="/ProductsList" element={<ProductMList />} />
        <Route path="/OrderList" element={<OrderList />} />
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/user" element={<User />} />
        <Route path="/register" element={<Register />}/>
        <Route path="/alogin" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/ProductsCard" element={<ProductsCard />} />
        <Route path="/order" element={<Order />} />
        <Route path="/track" element={<Track orders={orderDetails}/>} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/ApiProducts" element={<ApiProducts />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/ProductsList" element={<ProductsList />}/>
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/Document" element={<Document />} />
        <Route path="/Video" element={<Video />} />
        <Route path='/jwtregister' element={<JWTRegister />} />
        <Route path='/feedbackform' element={<FeedbackForm />} />
        <Route path='/dashboard' element={<JWTDashboard />} />
        <Route path='/qrcode' element={<QRCodeViewer />} />
        


        
        



      </Routes>
    </Router>
  
    
      

  )
    
    
}

export default App;
