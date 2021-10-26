import { useState } from 'react';
import { useDispatch } from 'react-redux';
import contactsAction from '../../redux/actions';

import shortid from 'shortid';
import styles from './Form.module.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const nameId = shortid.generate();
  const numberId = shortid.generate();

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
  const handleSubmit = e => {
    e.preventDefault();

    dispatch(contactsAction.addContact(name, number));

    setName('');
    setNumber('');
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor={nameId}>
          <div className={styles.flexRow}>
            <input
              className={styles.lfInput}
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              onChange={handleChange}
              id={nameId}
              autoComplete="off"
            />
          </div>
        </label>
        <label className={styles.label} htmlFor={numberId}>
          <div className={styles.flexRow}>
            <input
              className={styles.lfInput}
              placeholder="Number"
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              onChange={handleChange}
              id={numberId}
              autoComplete="off"
            />
          </div>
        </label>
        <button className={styles.lfSubmit} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
}

export default ContactForm;
