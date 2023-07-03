import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Home.module.css';
export const Home = () => {
  return (
    <div className={css.home}>
      <nav className={css.navigation}>
        <NavLink className={css.nav_button} to="/">
          Home
        </NavLink>
        <NavLink className={css.nav_button} to="/tweets">
          Tweets
        </NavLink>
      </nav>
      <p className={css.welcome_message}>
        Welcome to our social media application. Please navigate to the "Tweets"
        tab.
      </p>
      <Outlet />
    </div>
  );
};
