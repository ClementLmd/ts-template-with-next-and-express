import Link from 'next/link';
import styles from './headerLayout.module.css';

export default function HeaderLayout() {
  return (
    <div className={styles.body}>
      <Link className={styles.title} href="/">
        Header
      </Link>
    </div>
  );
}
