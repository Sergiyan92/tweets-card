import { Link } from 'react-router-dom';
import { UsersList } from '../../components/userlist/UserList';
import css from './Tweets.module.css';
export const Tweets = () => {
  return (
    <div>
      <Link className={css.button_back} to="/">
        Back
      </Link>
      <UsersList />
    </div>
  );
};
