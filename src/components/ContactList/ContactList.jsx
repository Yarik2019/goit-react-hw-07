import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
const ContactList = () => {
  const contacts = useSelector(selectContacts);

  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) => {
    return contact.name
      .toLowerCase()
      .trim()
      .includes(filter.toLowerCase().trim());
  });

  return (
    <ul className={s.list}>
      <li className={s.list}>
        {filteredContacts.map((contact) => (
          <Contact key={contact.id} {...contact} />
        ))}
      </li>
    </ul>
  );
};

export default ContactList;
