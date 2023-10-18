import { lazy, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SharedLayout from '../components/SharedLayout/SharedLayout';
import { useAuth } from 'hooks/ useAuth';
import { refreshUser } from '../redux/auth/authOperation';
import { useDispatch } from 'react-redux';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';


const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing...</b>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route  path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          } />  
         
         <Route path="*" element={<Navigate to="/" />} />
      </Route>
     
    </Routes>
  );
};

