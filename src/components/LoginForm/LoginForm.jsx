import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperation';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.formLabel}>
          <input
            className={css.formInput}
            type="email"
            name="email"
            placeholder="E-mail"
          />
        </label>
        <label className={css.formLabel}>
          <input
            className={css.formInput}
            type="password"
            name="password"
            placeholder=" Password"
          />
        </label>
        <button className={css.button} type="submit">
          Log In
        </button>
      </form>
    </div>
  );
};
