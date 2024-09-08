import PropTypes from "prop-types";
import styles from "./Card.module.css";

const Card = ({ name, background, character }) => {
  return (
    <div className={styles.cardWrapper}>
      <img src={name} alt='Game Name' className={styles.nameImage} />
      <img
        src={background}
        alt='Game Background'
        className={styles.backgroundImage}
      />
      <img
        src={character}
        alt='Character Name'
        className={styles.characterImg}
      />
      <div>
        <h4>Play Now</h4>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
};

export default Card;
