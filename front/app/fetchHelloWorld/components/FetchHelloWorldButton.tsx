'use client';
import { useState } from 'react';
import styles from './fetchHelloWorldButton.module.css';

export default function FetchHelloWorldButton() {
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
