// Route: /database/post
import { Input } from '../../../components/Input';
import styles from './databasePostPage.module.css';

export default function DatabasePostPage() {
  return (
    <main className={styles.main}>
      <h1>Hello, Post Page!</h1>
      <Input name="Post in database" placeholder="Post in database" />
    </main>
  );
}
