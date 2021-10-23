import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsAction from '../../redux/actions';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(({ name, id, number }) => (
        <li className={styles.contactList} key={id}>
          <span className={styles.contactsNameNumber}>
            {name}: {number}
          </span>
          <button
            className={styles.buttonDelete}
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

// const getVisibleContacts = () => {
//   const normalizedFilter = filter.toLowerCase();
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter),
//   );
// };

const mapStateToProps = state => {
  const { items, filter } = state.contacts;
  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = items.filter(item =>
    item.name.toLowerCase().includes(normalizedFilter),
  );
  return {
    contacts: visibleContacts,
  };
};
const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsAction.deleteContact(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
