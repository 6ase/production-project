import React, { useState } from 'react';
import styles from './Counter.module.scss'
export const Counter = () => {
    const [count, setCounter] = useState(0)
    const increment = () => {
        setCounter(count + 1)
    }
    return (
        <div>
           <h1> {count} </h1>
            <button className={styles.btn_green} onClick={increment}>Click!</button>
        </div>
    );
};
