import { useDispatch } from 'react-redux';
import { UsersList } from './components/userlist/UserList';
import { useEffect } from 'react';
import { fetchUsers } from './redux/operations';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
    console.log(fetchUsers());
  }, [dispatch]);
  return (
    <div>
      <p>First project</p>
      <UsersList />
    </div>
  );
};

export default App;
