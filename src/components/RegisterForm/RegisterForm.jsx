import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperation';

export const RegisterForm = e => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          User name
          <input type="name" name="name" />
        </label>
        <label>
          {' '}
          Email
          <input type="text" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
