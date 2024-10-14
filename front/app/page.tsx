// Route: /

import RedirectButton from '../components/RedirectButton';
import styles from '../styles/page.module.css';
import { routes } from './config/routes';

export default function Home() {
  return (
    <div className={styles.main}>
      <RedirectButton route={routes.fetchHelloWorld} buttonName="Hello World" />
      <RedirectButton route={routes.database.index} buttonName="Database" />
    </div>
  );
}
