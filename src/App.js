import { useEffect } from 'react';
import { connect } from 'react-redux';
import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';
import Filter from './component/Filter';
import Section from './component/Section';

function App({ items }) {
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(items));
  }, [items]);

  return (
    <>
      <Section title={'Phonebook'}>
        <ContactForm />
      </Section>
      <Section title={'Contacts'}>
        <Filter />
        <ContactList />
      </Section>
    </>
  );
}
const mapStateToProps = state => ({
  items: state.contacts.items,
});

export default connect(mapStateToProps)(App);
