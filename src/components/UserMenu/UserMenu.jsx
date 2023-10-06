import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/ useAuth';
import { logOut } from 'redux/auth/authOperation';

export default function UserMenu() {
  const dispath = useDispatch();
  const { user } = useAuth();
  return (
    <div>
      <p>{user.name}</p>
      <button type="button" onClick={() => dispath(logOut())}></button>
    </div>
  );
}
