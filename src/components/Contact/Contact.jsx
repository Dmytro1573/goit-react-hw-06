import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";

export default function Contact({ id, name, phone }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div className={css.contactInfo}>
        <p className={css.contactName}>{name}</p>
        <p className={css.contactNumber}>{phone}</p>
      </div>
      <button type="button" className={css.deleteBtn} onClick={handleDelete}>
        Delete
      </button>
    </>
  );
}
