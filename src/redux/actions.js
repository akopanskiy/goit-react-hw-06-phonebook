import types from './types';
import shortid from 'shortid';

const addContact = (name, number) => ({
  type: types.ADD,
  payload: { id: shortid.generate(), name, number },
});

const deleteContact = contactId => ({
  type: types.DELETE,
  payload: contactId,
});

const changeFilter = value => ({
  type: types.FILTER,
  payload: value,
});
// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, changeFilter };
