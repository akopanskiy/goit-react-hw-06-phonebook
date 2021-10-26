import { useSelector, useDispatch } from 'react-redux';
import contactsAction from '../../redux/actions';
import { getFilter } from '../../redux/selectors';
import styles from './Filter.module.css';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <label>
      <input
        className={styles.lfInput}
        placeholder="Find contacts by name"
        type="text"
        value={value}
        onChange={event =>
          dispatch(contactsAction.changeFilter(event.currentTarget.value))
        }
      />
    </label>
  );
};

export default Filter;
