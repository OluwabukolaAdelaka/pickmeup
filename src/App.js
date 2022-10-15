import React from "react";
import { Routes, Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Signup from "./pages/Signup";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./DashboardPages/ShipPages/Dashboard"
import Shipping from "./DashboardPages/ShipPages/Shipping";
import ShippingDetails from "./DashboardPages/ShipPages/ShippingDetails";
import TrackOrder from "./DashboardPages/TrackPages/TrackOrder";
import FundWallet from "./DashboardPages/FundWallet";

function App() {
  
  return (
    <>
      <Routes>
            <Route path="/" element={<Homepage/> } />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="signup" element={<Signup />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="forgotpassword" element={<ForgotPassword />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="shipping" element={<Shipping />} />
            <Route path="shippingDetails" element={<ShippingDetails />} />
            <Route path="trackorder" element={<TrackOrder />} />
            <Route path="fundwallet" element={<FundWallet />} />

      </Routes>
    </>
  );
}

export default App;
