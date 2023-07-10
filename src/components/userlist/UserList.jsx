import { useDispatch, useSelector } from 'react-redux';
import { selectUsers } from '../../redux/selectors';
import { increasePage } from '../../redux/UsersSlice';
import { User } from '../user/User';
import css from './UserList.module.css';

export const UsersList = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  const handleLoadMore = () => {
    dispatch(increasePage());
  };
  return (
    <>
      <ul className={css.list}>
        {users?.map(user => (
          <User key={user.id} user={user} />
        ))}
      </ul>
      <button className={css.btm_loadmore} onClick={handleLoadMore}>
        Load more
      </button>
    </>
  );
};
