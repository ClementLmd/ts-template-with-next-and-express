'use client';
import { useState } from 'react';
import styles from '../styles/buttonFetchHelloWorld.module.css';

export default function ButtonFetchHelloWorld() {
  const [displayHelloWorld, setDisplayHelloWorld] = useState(false);
  const handleClick = () => {
    fetch('http://localhost:3001')
      .then(() => setDisplayHelloWorld(!displayHelloWorld))
      .catch((error) => console.log({ error }));
  };

  return (
    <div className={styles.body}>
      <button className={styles.button} onClick={handleClick}>
        Display Hello World !
      </button>
      {displayHelloWorld && <div>Hello World !</div>}
    </div>
  );
}
