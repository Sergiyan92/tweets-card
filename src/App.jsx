// import { UsersList } from './components/userlist/UserList';
// import css from './App.module.css';
import { useEffect } from 'react';
import { fetchUsers } from './redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectPage } from './redux/selectors';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './page/Home/Home';
import { Tweets } from './page/Tweets/Tweets';

const App = () => {
  const page = useSelector(selectPage);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers(page));
  }, [dispatch, page]);

  return (
    // <Routes>
    //   <div className={css.app}>
    //     <UsersList />
    //   </div>
    // </Routes>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tweets" element={<Tweets />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;

// {/* <Router>
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/tweets" component={Tweets} />
//         <Redirect to="/" /> {/* Перенаправлення на домашню сторінку, якщо маршрут не знайдено */}
//       </Switch>
//     </Router> */}