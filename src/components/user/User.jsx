import { useEffect, useState } from 'react';
import css from './User.module.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

export const User = props => {
  const user = props;
  const currentUser = user.user;
  const [isFollowing, setIsFollowing] = useState(false);
  const [followers, setFollowers] = useState(currentUser.followers);

  useEffect(() => {
    const userData = JSON.parse(
      localStorage.getItem(`userData_${currentUser.id}`)
    );
    if (userData) {
      setIsFollowing(userData.isFollowing);
      setFollowers(userData.followers);
    }
  }, [currentUser.id]);

  const handleFollowClick = () => {
    setIsFollowing(prevFollowing => !prevFollowing);
    setFollowers(prevFollowers =>
      isFollowing ? prevFollowers - 1 : prevFollowers + 1
    );

    const userData = {
      isFollowing: !isFollowing,
      followers: followers,
    };
    localStorage.setItem(
      `userData_${currentUser.id}`,
      JSON.stringify(userData)
    );
  };

  useEffect(() => {
    const userData = {
      isFollowing: isFollowing,
      followers: followers,
    };
    localStorage.setItem(
      `userData_${currentUser.id}`,
      JSON.stringify(userData)
    );
  }, [isFollowing, followers, currentUser.id]);

  const options = {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  };

  return (
    <div className={css.background}>
      <Link to="/">
        <img src={logo} alt="logo" className={css.logo} />
      </Link>

      <ul className={css.item}>
        <li className={css.avatar}>
          <hr className={css.line} />
          <img className={css.img} src={currentUser.avatar} alt="avatar" />
          <hr className={css.line} />
        </li>
        <li className={css.tweets}>
          <span className={css.title}>{currentUser.tweets}</span>
          <p className={css.title}>Tweets</p>
        </li>
        <li className={css.followers}>
          <span className={css.title}>
            {followers.toLocaleString('en-US', options)}
          </span>
          <p className={css.title}>Followers</p>
        </li>
        <button
          className={css.button_follow}
          onClick={handleFollowClick}
          style={{
            background: isFollowing ? '#5CD3A8' : '#EBD8FF',
          }}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </button>
      </ul>
    </div>
  );
};
