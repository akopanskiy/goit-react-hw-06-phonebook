// import { useEffect } from 'react';
// import { connect } from 'react-redux';
import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';
import Filter from './component/Filter';
import Section from './component/Section';

export default function App() {
  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(items));
  // }, [items]);

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
// const mapStateToProps = state => ({
//   items: state.contacts.items,
// });

// export default connect(mapStateToProps)(App);
