import { useDispatch, useSelector } from 'react-redux';
import { selectUsers } from '../../redux/selectors';
import { increasePage } from '../../redux/UsersSlice';

import css from './UserList.module.css';

import { User } from '../user/User';

export const UsersList = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  const handleLoadMore = () => {
    dispatch(increasePage());
  };
  return (
    <>
      <div className={css.list}>
        {users?.map(user => (
          <ul>
            <User key={user.id} user={user} />
          </ul>
        ))}
      </div>
      <button className={css.btm_loadmore} onClick={handleLoadMore}>
        Load more
      </button>
    </>
  );
};
