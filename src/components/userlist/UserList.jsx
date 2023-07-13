import { useDispatch, useSelector } from 'react-redux';
import { selectUsers } from '../../redux/selectors';
import { increasePage } from '../../redux/UsersSlice';
import { User } from '../user/User';
import css from './UserList.module.css';
import { useEffect, useState } from 'react';

export const UsersList = () => {
  const users = useSelector(selectUsers);
  const [showBtn, setShowBtn] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      const fetchTweets = () => {
        setShowBtn(users.length < 12);
      };
      fetchTweets();
    } catch (error) {
      console.log(error);
    }
  });
  const handleLoadMore = () => {
    dispatch(increasePage());
  };
  return (
    <>
      <div className={css.list}>
        {users?.map(user => (
          <User key={user.id} user={user} />
        ))}
      </div>
      {showBtn && (
        <button className={css.btm_loadmore} onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </>
  );
};
