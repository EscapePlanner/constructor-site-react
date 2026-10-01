import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Link, Navigate, useLocation } from 'react-router-dom';

type ProtectedRoute = {
  children: ReactElement;
  onlyUnAuth?: boolean;
};

export function ProtectedRoute({ children, onlyUnAuth }: ProtectedRoute) {
  //const userData = useSelector()
  //const location = useLocation()

  //if(!onlyUnAuth && !user) {
  //    return <Navigate replace to='/login' state={{background: location}}/>
  //}

  //if (onlyUnAuth && user) {
  //    const from = location.state?.from || {pathname: '/'}
  //    return <Navigate replace to={from}/>
  //}

  return children;
}
