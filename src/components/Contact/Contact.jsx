import s from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";
const Contact = (props) => {
  const { id, name, number } = props;
  const dispatch = useDispatch();
  return (
    <div className={s.container}>
      <div className={s.item}>
        <h3 className={s.name}>{name}</h3>
        <p className={s.phone}>{number}</p>
      </div>
      <button className={s.btn} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
