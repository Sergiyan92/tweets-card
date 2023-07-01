import { useDispatch, useSelector } from 'react-redux';
import { selectPage, selectUsers } from '../../redux/selectors';
import { increasePage } from '../../redux/UsersSlice';
import { useEffect } from 'react';
import { fetchUsers } from '../../redux/operations';

export const UsersList = () => {
  const users = useSelector(selectUsers);
  const page = useSelector(selectPage);
  console.log(page);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers(page));
  }, [dispatch, page]);
  const handleLoadMore = () => {
    dispatch(increasePage());
  };

  // const isLoading = useSelector(selectIsLoading);
  return (
    <div>
      {users.map(user => (
        <ul key={user.id}>
          <li>
            <img src={user.avatar} alt="" />
          </li>
          <li>{user.tweets}</li>
          <li>{user.followers}</li>
          <button>Folow</button>
        </ul>
      ))}
      <button onClick={handleLoadMore}>Load more</button>
    </div>
  );
};
