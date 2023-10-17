import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectContacts } from "redux/contact/selector"
import { updateContact } from "redux/operations"
import { nanoid } from "nanoid"
import css from './UpdateForm.module.css'

const UpdateForm=({onClose, contactId})=>{
    const dispatch=useDispatch()
    const contacts= useSelector(selectContacts)
    const currentContact = contacts.find(el => el.id === contactId);

  const [newName, setNewName] = useState(currentContact.name);
  const [newNumber, setNewNumber] = useState(currentContact.number);
    const handleChangeName=e=>{
        setNewName(e.currentTarget.value)
    }
    const handleChangeNumber=e=>{
        setNewNumber(e.currentTarget.value)
    }

    const handleClose=()=>onClose()
    const handleSubmit=e=>{
        e.preventDefault()
        const contact = {
            name: newName,
            number: newNumber,
          };
      
        dispatch(updateContact({contact, contactId}))
        handleClose()
    }
    const nameInputId = nanoid(5);
    const numberInputId = nanoid(5);
  
    return( <div className={css.overley}>
        <div className={css.modal}>
          <form className={css.modalForm} onSubmit={handleSubmit} >
            <button className={css.modalCloseBtn} type="button" onClick={handleClose}>
              X
            </button>
            <label htmlFor={nameInputId} className={css.label}>  <input className={css.modalInput}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              placeholder="Name"
              value={newName}
          id={nameInputId}
          onChange={handleChangeName}
              
              /></label>
             
             <label htmlFor={numberInputId}>  <input className={css.modalInput}
             type="tel"
             name="number"
             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
             required
             placeholder="Number"
             value={newNumber}
             id={numberInputId}
             onChange={handleChangeNumber}
             /></label>
             
              
            <button className={css.modalSubmitBtn} type="submit" onClick={handleClose} >
              Edit
            </button>
          </form>
        </div>
      </div>)
  
}
export default UpdateForm