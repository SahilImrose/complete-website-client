import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../../App';
const AdminPrivateRoute = ({ children, ...rest }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  return (

    <div>
      <Route
        {...rest}
        render={({ location }) =>
          (loggedInUser.email || sessionStorage.getItem('email')) ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    </div>
  );
};

export default AdminPrivateRoute;