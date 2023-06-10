import { ReactElement, useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "./AuthProvider";

export function useGuard(element: ReactElement, path: string = "/login") {
  const { isAuthenticated } = useContext(AuthContext);
  if (!isAuthenticated) {
    console.log(`Navigating to ${path}...`);
    return <Navigate replace to={path} />;
  } else {
    return element;
  }
}

export function usePermit(element: ReactElement, path: string = "/") {
  const { isAuthenticated } = useContext(AuthContext);
  if (isAuthenticated) {
    console.log(`Navigating to ${path}...`);
    return <Navigate replace to={path} />;
  } else {
    return element;
  }
}
