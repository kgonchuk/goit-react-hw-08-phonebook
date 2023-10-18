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
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      required
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
            required
          />
        </label>
        <label className={css.formLabel}>
          <input
            className={css.formInput}
            type="password"
            name="password"
            placeholder="Password contain min 7 characters"
            autoComplete='off'
            title='Password must contain min 7 characters'
            required
          />
        </label>
        <button className={css.button} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};
