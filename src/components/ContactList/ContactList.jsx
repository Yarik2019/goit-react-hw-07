import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ contacts }) => {
  return (
    <ul className={s.list}>
      <li className={s.list}>
        {contacts.map((contact) => (
          <Contact key={contact.id} {...contact} />
        ))}
      </li>
    </ul>
  );
};

export default ContactList;
