// import css from './App.module.css';
// import Form from './Form/Form';
// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectError, selectIsLoader } from './redux/contact/selector';
// import { useEffect } from 'react';
// import { fetchContacts } from './redux/operations';
// import {RegisterPage} from '../pages/Register';
// import {HomePage} from '../pages/Home';
// import {LoginPage} from '../pages/Login'
// import {ContactPage} from '../pages/Contacts'

import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from '../components/SharedLayout/SharedLayout';

const HomePage = lazy(() => import('../pages/Home'));
const LoginPage = lazy(() => import('../pages/Login'));
const RegisterPage = lazy(() => import('../pages/Register'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />} />
      <Route index element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/contacts" element={<ContactPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
