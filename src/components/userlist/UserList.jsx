import { useSelector } from 'react-redux';
import { selectUsers } from '../../redux/selectors';

export const UsersList = () => {
  const users = useSelector(selectUsers);
  console.log(users);
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
    </div>
  );
};
