import PropTypes from 'prop-types';
import styles from '../FriendList/FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline = 'true' }) => {
  return (
    <li className={styles.item}>
      <span className={isOnline ? styles.isOnline : styles.isOffline}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propType = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.string.isRequired,
};

export default FriendListItem;
