import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';
import Filter from './component/Filter';
import Section from './component/Section';

export default function App() {
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
