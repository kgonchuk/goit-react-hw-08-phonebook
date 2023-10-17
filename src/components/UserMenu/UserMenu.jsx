import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/ useAuth';
import { logOut } from 'redux/auth/authOperation';
import css from './UserMenu.module.css';

export default function UserMenu() {
  const dispath = useDispatch();
  const { user } = useAuth();
  return (
    <div className={css.userMenuContainer}>
      <p className={css.titleUser}>Welcome, {user.name}</p>
      <button
        className={css.buttonLogOut}
        type="button"
        onClick={() => dispath(logOut())}
      >
        Log out
      </button>
    </div>
  );
}
