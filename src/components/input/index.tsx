
import { useState } from 'react';
import styles from './input.module.css'

export default function Input() {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div>
        <input
            placeholder='Seu Nome'
            className={`${styles.input} ${isFocused ? styles.focused : ''}`}
            onFocus={handleFocus}
            onBlur={handleBlur}
            type="text"
        /> 
    </div>
  );
};