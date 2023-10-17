import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperation';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
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
    <div className={css.registerFormContainer}>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.formLabel}>
          <input
            className={css.formInput}
            type="name"
            name="name"
            placeholder=" User name"
      
            autoComplete='off'
          />
        </label>
        <label className={css.formLabel}>
          <input
            className={css.formInput}
            type="text"
            name="email"
            placeholder=" Email"
            autoComplete='off'
          />
        </label>
        <label className={css.formLabel}>
          <input
            className={css.formInput}
            type="password"
            name="password"
            placeholder="Password"
            autoComplete='off'
          />
        </label>
        <button className={css.button} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};
