import React from "react";
import UserContext from "data/UserAuthContext";

import { useLocation, Navigate } from "react-router-dom";
import { string } from "yargs";

const useAuth = () => React.useContext(UserContext);

export interface RequiredAuthPageTokenProps {
  nome?: string | {};
}

interface NavigatedProps {
  state?: { from: Location };
}

interface LoginUserPageProps {
  user: {};
  signout(): void;
  signout(): void;
}

const RequiredAuthPageToken: React.FC<RequiredAuthPageTokenProps> = (props) => {
  const [user, setUser] = React.useState(() => {
    return null;
  });
  const location = useLocation();

  const auth = useAuth();

  if (!auth) {
    return (
      <Navigate
        to="/login"
        state={{ from: location } as NavigatedProps}
        replace
      />
    );
  }

  return <>{props.children}</>;
};

export const LoginUserPage = () => {
  const auth = useAuth();
  const location = useLocation();
  const [user, setUser] = React.useState({});

  const signin = (newUser: { username: string }) => {
    setUser(newUser);
  };

  const signout = () => setUser({ username: null });
};

let value = {
  user,
  signin,
  signout,
} as LoginUserPageProps;

export default RequiredAuthPageToken;
