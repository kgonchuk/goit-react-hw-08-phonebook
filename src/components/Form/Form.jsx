import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import css from './Form.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contact/selector';
import { addContact } from '../../redux/operations';
const Form = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const [contactName, setName] = useState('');
  const [number, setNumber] = useState('');
  const nameInputId = nanoid();
  const numberInputId = nanoid();
  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.some(({ name }) => name === contactName)) {
      Notify.failure(`${contactName} is already in your contacts`);
      return;
    }
    dispatch(
      addContact({
        name: contactName,
        number,
        id: nanoid(),
      })
    );
    setName('');
    setNumber('');
  };
  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <h2 className={css.formTittle}>Your Phonebook</h2>
      <label className={css.formLabel} htmlFor={nameInputId}>
        <input
          className={css.formInput}
          type="text"
          name="name"
          placeholder="Name"
          value={contactName}
          onChange={handleChange}
          id={nameInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.formLabel} htmlFor={numberInputId}>
        <input
          className={css.formInput}
          type="tel"
          name="number"
          placeholder="+38"
          value={number}
          onChange={handleChange}
          id={numberInputId}
          pattern="[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}"
          title="Format phone number 0123456789"
          required
        />
      </label>
      <button className={css.addContactBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};
export default Form;
