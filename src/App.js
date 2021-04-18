import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Booking from './components/Booking/Booking/Booking';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import { createContext, useState } from 'react';
import AddServices from './components/Dashboard/AddServices/AddServices';
import AdminPrivateRoute from './components/Login/PrivateRoute/AdminPrivateRoute';
import Login from './components/Login/Login/Login';
import AddAdmin from './components/Dashboard/AddAdmin/AddAdmin';
import AddReview from './components/Dashboard/AddReview/AddReview';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/"><Home></Home></Route>
        <Route path="/booking"><Booking></Booking></Route>
        <AdminPrivateRoute path="/dashboard"><Dashboard></Dashboard></AdminPrivateRoute>
        <AdminPrivateRoute path="/addService"><AddServices/></AdminPrivateRoute>
        <AdminPrivateRoute path="/addAdmin"><AddAdmin/></AdminPrivateRoute>
        <AdminPrivateRoute path="/review"><AddReview/></AdminPrivateRoute>
        <Route path="/login"><Login></Login></Route>
      </Switch>
    </Router></UserContext.Provider>
  );
}

export default App;
