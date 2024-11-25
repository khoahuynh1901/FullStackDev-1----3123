import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../actions/authActions';

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h2>Profile</h2>
      {user ? (
        <>
          <p>Welcome, {user.username}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>Please log in first.</p>
      )}
    </div>
  );
};

export default Profile;
