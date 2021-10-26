import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../../redux/selectors';
import contactsAction from '../../redux/actions';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  return (
    <ul className={styles.list}>
      {contacts.map(({ name, id, number }) => (
        <li className={styles.contactList} key={id}>
          <span className={styles.contactsNameNumber}>
            {name}: {number}
          </span>
          <button
            className={styles.buttonDelete}
            onClick={() => dispatch(contactsAction.deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
