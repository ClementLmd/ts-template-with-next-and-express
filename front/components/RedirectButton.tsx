import Link from 'next/link';
import { RoutePaths } from '../app/config/routes';
import styles from './redirectButton.module.css';

export default function RedirectButton({
  route,
  buttonName,
}: {
  route: RoutePaths;
  buttonName: string;
}) {
  return (
    <button className={styles.button} type="button">
      <Link href={`${route}`} className={styles.link}>
        {buttonName}
      </Link>
    </button>
  );
}
