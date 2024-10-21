// Route: /

import type { Metadata } from 'next';
import RedirectButton from '../components/RedirectButton';
import styles from '../styles/page.module.css';
import { routes } from './config/routes';

export const metadata: Metadata = {
  title: 'Template Layout',
  description: 'Generated by lmd',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function Home() {
  return (
    <div className={styles.main}>
      <RedirectButton route={routes.fetchHelloWorld} buttonName="Hello World" />
      <RedirectButton route={routes.database.index} buttonName="Database" />
    </div>
  );
}
