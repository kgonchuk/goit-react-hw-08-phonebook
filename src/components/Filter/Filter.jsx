import React from 'react';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/filter/selector';
import { setFilter } from '../../redux/filter/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <form className={css.form}>
      <label className={css.formLabel}>
        <h2 className={css.filterTittle}>Find contacts by name</h2>
        <input
          type="text"
          value={filter}
          name={filter}
          placeholder="Enter phone number to find"
          onChange={onChangeFilter}
          className={css.contactInput}
        />
      </label>
    </form>
  );
};
export default Filter;
