'use client';
import { useState } from 'react';
import styles from '../styles/fetchHelloWorld.module.css';

export default function FetchHelloWorld() {
  const [displayHelloWorld, setDisplayHelloWorld] = useState(false);
  const handleClick = () => {
    console.log(displayHelloWorld);
    fetch('http://localhost:3001', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log({ response });
        return response.json();
      })
      .then((result) => {
        console.log({ result });
        setDisplayHelloWorld(!displayHelloWorld);
      })
      .catch((error) => console.log({ error }));
  };

  return (
    <div className={styles.body}>
      <button className={styles.button} onClick={handleClick}>
        Display Hello World !
      </button>
      {displayHelloWorld && <div>Hello World !</div>}
      <div>Hello world value : {displayHelloWorld ? 1 : 0}</div>
    </div>
  );
}
