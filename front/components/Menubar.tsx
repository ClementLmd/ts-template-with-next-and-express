'use client';

import styles from './menubar.module.css';
import { routes, type RoutePaths } from '../app/config/routes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function MenuBar() {
  const pathname = usePathname();

  const isMenuItemActive = (path: RoutePaths) => {
    if (path === routes.home) {
      return pathname === '/';
    }
    return pathname.includes(path);
  };

  return (
    <div className={styles.main}>
      <div className={styles.menu}>
        <Link
          href={`${routes.home}`}
          className={`${styles.menuItem} ${isMenuItemActive(routes.home) ? styles.active : ''}`}
        >
          Home
        </Link>
        <Link
          href={`${routes.database.index}`}
          className={`${styles.menuItem} ${isMenuItemActive(routes.database.index) ? styles.active : ''}`}
        >
          Database
        </Link>
        <Link
          href={`${routes.fetchHelloWorld}`}
          className={`${styles.menuItem} ${isMenuItemActive(routes.fetchHelloWorld) ? styles.active : ''}`}
        >
          HelloWorld
        </Link>
      </div>
    </div>
  );
}

export default MenuBar;
