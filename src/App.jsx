import { UsersList } from './components/userlist/UserList';
import css from './App.module.css';
import { useEffect } from 'react';
import { fetchUsers } from './redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectPage } from './redux/selectors';

const App = () => {
  const page = useSelector(selectPage);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers(page));
  }, [dispatch, page]);

  return (
    <div className={css.app}>
      <UsersList />
    </div>
  );
};

export default App;
