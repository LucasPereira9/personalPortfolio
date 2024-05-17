
import { useState } from 'react';
import styles from './input.module.css'
import { IInputProps } from './input.structure';

export default function Input(props: IInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    props.setValue((prevData) => ({
        ...prevData,
        [props.fieldName]: e.target.value
    }));
};

  return (
    <div>
        <input
            placeholder={props.placeHolder}
            className={`${styles.input} ${isFocused ? styles.focused : ''}`}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={props.value}
            onChange={handleChange}
            type="text"
        /> 
    </div>
  );
};