import Link from 'next/link';
import styles from './headerLayout.module.css';
import Image from 'next/image';
import { routes } from '../app/config/routes';
import DesktopNavBar from './DesktopNavBar';
import MobileNavBar from './MobileNavBar';
import { useState } from 'react';

export default function HeaderLayout() {
  const [hasAccessToWindow, setHasAccessToWindow] = useState<boolean>(false);
  if (typeof window !== 'undefined') {
    setHasAccessToWindow(true);
  }
  return (
    <div className={styles.body}>
      <div id="headerLogo">
        <Link href={routes.home}>
          <Image
            src="/favicon.ico"
            width={50}
            height={50}
            alt="logo"
            className={styles.image}
            priority
          />
        </Link>
      </div>
      <div id="headerLinks">
        {hasAccessToWindow && window.innerWidth > 865 ? <DesktopNavBar /> : <MobileNavBar />}
      </div>
      <div className={styles.login}>Connexion</div>
    </div>
  );
}
