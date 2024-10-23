'use client';
// Route: /database/post
import { useState } from 'react';
import { Input } from '../../../components/Input';
import { createUser } from '../../../features/user/user.thunks';
import { useAppDispatch } from '../../../hooks/hooks';
import styles from './databasePostPage.module.css';

export default function DatabasePostPage() {
  const dispatch = useAppDispatch();

  const [userFirstname, setUserFirstname] = useState('');
  const [userLastname, setUserLastname] = useState('');

  const handleSubmitNewUser = () => {
    dispatch(createUser({ firstname: userFirstname, lastname: userLastname }));
  };

  return (
    <main className={styles.main}>
      <h1>Hello, Post Page!</h1>
      <div>
        <div>Save a new user in database</div>
        <form onSubmit={handleSubmitNewUser}>
          <Input
            name="Firstname new user"
            placeholder="User's firstname"
            onChange={(e) => setUserFirstname(e.target.value)}
          />
          <Input
            name="Lastname new user"
            placeholder="User's lastname"
            onChange={(e) => setUserLastname(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </main>
  );
}
