import { Toaster } from 'react-hot-toast';
import AppBar from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './SharedLayout.module.css';

export default function SharedLayout() {
  return (
    <div className={css.sharedLayoutBar}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}
