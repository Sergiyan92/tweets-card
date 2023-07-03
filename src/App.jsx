import { useEffect } from 'react';
import { fetchUsers } from './redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectPage } from './redux/selectors';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './page/Home/Home';
import { Tweets } from './page/Tweets/Tweets';
import css from './App.module.css';
const App = () => {
  const page = useSelector(selectPage);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers(page));
  }, [dispatch, page]);

  return (
    <div className={css.app}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
