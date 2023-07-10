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
    const followingStatus = localStorage.getItem(
      `followingStatus_${currentUser.id}`
    );
    if (followingStatus === 'true') {
      setIsFollowing(true);
    }
    const savedFollowersCount = localStorage.getItem(
      `followersCount_${currentUser.id}`
    );
    if (savedFollowersCount) {
      setFollowers(parseInt(savedFollowersCount, 10));
    }
  }, [currentUser.id]);
  const handleFollowClick = () => {
    setIsFollowing(prevFollowing => !prevFollowing);
    setFollowers(prevFollowers =>
      isFollowing ? prevFollowers - 1 : prevFollowers + 1
    );
    localStorage.setItem(`followingStatus_${currentUser.id}`, !isFollowing);
  };
  useEffect(() => {
    localStorage.setItem(`followersCount_${currentUser.id}`, followers);
  }, [followers, currentUser.id]);
  const options = {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  };
  return (
    <li className={css.background}>
      <Link to="/">
        <img src={logo} alt="logo" className={css.logo} />
      </Link>
      <div className={css.item}>
        <div className={css.avatar}>
          <img className={css.img} src={currentUser.avatar} alt="avatar" />
        </div>
        <div className={css.tweets}>
          <p className={css.title}>{currentUser.tweets}</p>
          <p className={css.title}>Tweets</p>
        </div>
        <div className={css.followers}>
          <p className={css.title}>
            {followers.toLocaleString('en-US', options)}
          </p>
          <p className={css.title}>Folowers</p>
        </div>
        <button
          className={css.button_follow}
          onClick={handleFollowClick}
          style={{
            background: isFollowing ? '#5CD3A8' : '#EBD8FF',
          }}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </button>
      </div>
    </li>
  );
};
