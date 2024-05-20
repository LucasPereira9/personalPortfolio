import { useState } from 'react';
import styles from './input.module.css';
import { IInputProps } from './input.structure';

export default function Input(props: IInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    props.setValue((prevData) => ({
        ...prevData,
        [props.fieldName]: e.target.value
    }));
  };

  return (
    <div>
      <textarea
        placeholder={props.placeHolder}
        className={`${props.isMessageType ? styles.message_input : styles.input} ${isFocused ? styles.focused : ''}`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={props.value}
        onChange={handleChange}
        rows={4}
      />
    </div>
  );
};