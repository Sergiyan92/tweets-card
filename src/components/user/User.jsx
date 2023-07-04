import React, { useEffect, useState } from 'react';
import css from './User.module.css';

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
        <p className={css.title}>Folowers</p>
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
  );
};
