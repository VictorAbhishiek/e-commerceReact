import React from "react";
import { useState } from "react";
import { Routes, Route, Navigate} from "react-router-dom"
import "./App.css"
import LandingPage from "./stores/pages/landingPage";
import Kitchenpage from "./stores/pages/Kitchenpage"
import Mobilepage from "./stores/pages/Mobilepage";
import Computerpage from "./stores/pages/Computerpage";
import Watchpage from "./stores/pages/Watchepage";
import Furniturepage from "./stores/pages/Furniturepage";
import Acpage from "./stores/pages/Acpage";
import Mensfashion from "./stores/pages/Mensfashionpage";
import Fridgepage from "./stores/pages/Fridgepage";
import Womenpage from "./stores/pages/Womenpage";
//import Mobilesingle from "./singles/Mobilesingle";
import Womansingle from "./singles/Womensingle";
import Acsingle from "./singles/Acsingle";
import Furnituresingle from "./singles/Furnituresingle";
import Mobilesingle from "./singles/Mobilesingle";
import Watchsingle from "./singles/Watchsingle";
import Kitchensingle from "./singles/Kitchensingle";
import UserCart from "./stores/UserCart";
import Computersingle from "./singles/Computersingle";
import Mensingle from "./singles/Mensingle";
import Fridgesingle from "./singles/Fridgesingle";
import Login from "./stores/components/Login";


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };
  return ( 
    <div>
      <Routes>
        <Route path="/login" element = {<Login onLogin={handleLogin} />} />
        <Route path="/" element = {<LandingPage />} />
        <Route path="/kitchen" element = { isAuthenticated ? <Kitchenpage/>: <Navigate to="/login" />} />
        <Route path="/mobiles" element={ isAuthenticated ? <Mobilepage /> : <Navigate to="/login" />} />
        <Route path="/computers"element={<Computerpage />} />
        <Route path="/watch" element={ isAuthenticated ? <Watchpage />: <Navigate to= "/login" />} />
        <Route path="/furniture" element= { isAuthenticated ? <Furniturepage />: <Navigate to= "/login" />} />
        <Route path="/ac" element={ isAuthenticated ? <Acpage />: <Navigate to= "/login" />} />
        <Route path="/men" element={ isAuthenticated ? <Mensfashion />: <Navigate to= "/login" />} />
        <Route path="/fridge" element={ isAuthenticated ? <Fridgepage/>: <Navigate to= "/login" />} />
        <Route path="/woman" element={ isAuthenticated ? <Womenpage />: <Navigate to= "/login" />} />
        <Route path="/mobiles/:id" element={ isAuthenticated ? <Mobilesingle/>: <Navigate to= "/login" />} />
        <Route path="/cart" element={ isAuthenticated ? <UserCart />: <Navigate to= "/login" />} />
        <Route path="/ac/:id" element = {isAuthenticated ? <Acsingle />: <Navigate to= "/login" />} />
        <Route path="/computers/:id" element={isAuthenticated ? <Computersingle />: <Navigate to= "/login" />} />
        <Route path="/men/:id" element={isAuthenticated ? <Mensingle />: <Navigate to= "/login" />} />
        <Route path="/watch/:id" element ={isAuthenticated ? <Watchsingle />: <Navigate to= "/login" />} />
        <Route path="/woman/:id" element ={isAuthenticated ? <Womansingle />: <Navigate to= "/login" />} />
        <Route path="/fridge/:id" element ={isAuthenticated ? <Fridgesingle />: <Navigate to= "/login" />} />
        <Route path="/furniture/:id" element ={isAuthenticated ? <Furnituresingle />: <Navigate to= "/login" />} />
        <Route path="/kitchen/:id" element = {isAuthenticated ? <Kitchensingle />: <Navigate to= "/login" />} />
        
      </Routes>
    </div>
   )
}
 
export default App;