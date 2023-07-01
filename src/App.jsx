import { useDispatch, useSelector } from 'react-redux';
import { UsersList } from './components/userlist/UserList';
import { useEffect } from 'react';
import { fetchUsers } from './redux/operations';
import { selectPage } from './redux/selectors';

const App = () => {
  // const dispatch = useDispatch();
  // const page = useSelector(selectPage);
  // useEffect(() => {
  //   dispatch(fetchUsers(page));
  // }, [dispatch, page]);
  return (
    <div>
      <p>First project</p>
      <UsersList />
    </div>
  );
};

export default App;
