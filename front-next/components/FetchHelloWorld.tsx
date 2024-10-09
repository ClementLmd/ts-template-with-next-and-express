import styles from '../styles/fetchHelloWorld.module.css';
import ButtonFetchHelloWorld from './ButtonFetchHelloWorld';

export default function FetchHelloWorld() {
  return (
    <>
      <div className={styles.title}>
        Click to fetch and display Hello World{' '}
      </div>
      <ButtonFetchHelloWorld />
    </>
  );
}
