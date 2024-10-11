import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import s from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import { useEffect } from "react";
import { fetchContacts } from "../../services/api";
import { selectIsError, selectIsLoading } from "../../redux/selectors";
import Loader from "../Loader/Loader";
import ErrorMessages from "../ErrorMessages/ErrorMessages";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Phonebook</h1>

      <ContactForm />
      <SearchBox />
      {isLoading && !isError && <Loader />}
      {isError && <ErrorMessages message={isError} />}
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
