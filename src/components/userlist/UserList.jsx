import { useDispatch, useSelector } from 'react-redux';

import { selectUsers } from '../../redux/selectors';
import { increasePage } from '../../redux/usersSlice';
import { updateTask } from '../../redux/operations';

import css from './UserList.module.css';
import { useEffect, useState } from 'react';

export const UsersList = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    // const followingStatus = localStorage.getItem('followingStatus');
    // if (followingStatus === 'true') {
    //   setIsFollowing(true);
    // }
  }, []);
  const handleFollowClick = () => {
    // Зміна стану фоловінгу
    setIsFollowing(prevFollowing => !prevFollowing);
    // Збереження стану фоловінгу
    // localStorage.setItem('followingStatus', !isFollowing);
  };
  const handleLoadMore = () => {
    dispatch(increasePage());
  };
  const options = {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  };
  return (
    <div className={css.list}>
      {users?.map(user => (
        <ul key={user.id} className={css.item}>
          <li className={css.avatar}>
            <hr className={css.line} />
            <img className={css.img} src={user.avatar} alt="" />
            <hr className={css.line} />
          </li>
          <li className={css.tweets}>
            <span className={css.title}>{user.tweets}</span>
            <p className={css.title}>Tweets</p>
          </li>
          <li className={css.followers}>
            <span className={css.title}>
              {user.followers.toLocaleString('en-US', options)}
            </span>
            <p className={css.title}>Folowers</p>
          </li>
          <button
            className={css.button_follow}
            onClick={() => dispatch(updateTask(user.id), handleFollowClick())}
            style={{
              background: isFollowing ? '#5CD3A8' : '#EBD8FF',
            }}
          >
            {isFollowing ? 'Following' : 'Follow'}
          </button>
        </ul>
      ))}
      <button className={css.btm_loadmore} onClick={handleLoadMore}>
        Load more
      </button>
    </div>
  );
};
