import styles from "./Card.module.css";
import { IoMdAdd } from "react-icons/io";

const AddGameCard = () => {
  return (
    <>
      <div
        className={styles.cardWrapper}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f0f0f0",
        }}>
        <IoMdAdd />
        <h6>Add game</h6>
      </div>
    </>
  );
};
export default AddGameCard;
