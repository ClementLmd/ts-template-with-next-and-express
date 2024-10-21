'use client';

import Link from 'next/link';
import styles from './headerLayout.module.css';
import Image from 'next/image';
import { routes } from '../app/config/routes';
import { isMenuItemActive } from '../utils/isMenuItemActive';
import { usePathname } from 'next/navigation';

export default function HeaderLayout() {
  const pathname = usePathname();

  return (
    <div className={styles.body}>
      <div id="headerLogo">
        <Link href={routes.home}>
          <Image src="/favicon.ico" width={50} height={50} alt="logo" className={styles.image} />
        </Link>
      </div>
      <div id="headerLinks" className={styles.links}>
        <Link
          className={`${styles.title} ${isMenuItemActive(routes.home, pathname) ? styles.active : ''}`}
          href={routes.home}
        >
          Home
        </Link>
        <Link
          className={`${styles.title} ${isMenuItemActive(routes.database.index, pathname) ? styles.active : ''}`}
          href={routes.database.index}
        >
          Database
        </Link>
        <Link
          className={`${styles.title} ${isMenuItemActive(routes.fetchHelloWorld, pathname) ? styles.active : ''}`}
          href={routes.fetchHelloWorld}
        >
          HelloWorld
        </Link>
      </div>
      <div className={styles.title}>Connexion</div>
    </div>
  );
}
