import styles from '../styles/firstComponent.module.css';
import FetchHelloWorld from './FetchHelloWorld';

export default function FirstComponent() {
  return (
    <>
      <div className={styles.title}>First component</div>
      <FetchHelloWorld />
    </>
  );
}
