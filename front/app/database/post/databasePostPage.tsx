'use client';
// Route: /database/post
import { useState } from 'react';
import { createUser } from '../../../features/user/user.thunks';
import { useAppDispatch } from '../../../hooks/hooks';
import styles from './databasePostPage.module.css';
import { Input } from '../../../components/ui/input';
import { Button } from '../../../components/ui/button';

export default function DatabasePostPage() {
  const dispatch = useAppDispatch();

  const [userFirstname, setUserFirstname] = useState('');
  const [userLastname, setUserLastname] = useState('');

  const handleSubmitNewUser = () => {
    dispatch(createUser({ firstname: userFirstname, lastname: userLastname }));
  };

  return (
    <main className={styles.main}>
      <div>
        <div>Save a new user in database</div>
        <form onSubmit={handleSubmitNewUser} className="flex-col items-center justify-between my-2">
          <Input
            name="firstname"
            placeholder="User's firstname"
            onChange={(e) => setUserFirstname(e.target.value)}
            className="my-2"
          />
          <Input
            name="lastname"
            placeholder="User's lastname"
            onChange={(e) => setUserLastname(e.target.value)}
            className="my-2"
          />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </main>
  );
}
