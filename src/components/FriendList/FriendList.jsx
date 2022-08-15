import FriendListItem from './FriendListItem';
import css from './FriendList.module.css';
import PropTypes from 'prop-types';

function FriendList({ friends }) {
  // const friendEl = friends.map(({ id, ...prop }) => (
  //   <FriendListItem key={id} {...prop} />
  // ));
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, ...prop }) => (
        <FriendListItem key={id} {...prop} />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
export default FriendList;
