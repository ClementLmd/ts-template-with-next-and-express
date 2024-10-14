// Route: /database

import RedirectButton from '../../components/RedirectButton';
import { routes } from '../config/routes';
import styles from './databasePage.module.css';

export default function DatabasePage() {
  return (
    <div className={styles.main}>
      <h1>Hello Database page</h1>
      <RedirectButton route={routes.database.get} buttonName="GET" />
      <RedirectButton route={routes.database.post} buttonName="POST" />
    </div>
  );
}
