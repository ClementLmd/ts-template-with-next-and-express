// Route: /database/get
'use client';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../hooks/hooks';
import styles from './databaseGetPage.module.css';
import { selectUserIsLoading, selectUsers } from '../../../features/user/user.selectors';
import { fetchUsers } from '../../../features/user/user.thunks';

export default function DatabaseGetPage() {
  const dispatch = useAppDispatch();

  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectUserIsLoading);

  const handleFetchUsers = () => {
    dispatch(fetchUsers());
  };

  return (
    <div className={styles.main}>
      {isLoading && <p>Loading...</p>}
      <button onClick={handleFetchUsers}>Fetch users</button>
      <ul>
        {users.map((user) => (
          <li key={user.firstname.length}>
            {user.firstname} {user.lastname}
          </li>
        ))}
      </ul>
    </div>
  );
}
