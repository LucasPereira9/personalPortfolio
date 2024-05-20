import { useState } from 'react';
import styles from './input.module.css';
import { IInputProps } from './input.structure';
import { useTranslations } from 'next-intl';

export default function Input(props: IInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const t = useTranslations('index');

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const value = e.target.value;
    
    if (props.isNumber) {
      const numberValue = value.replace(/\D/g, '');
      props.setValue((prevData) => ({
        ...prevData,
        [props.fieldName]: numberValue
      }));
    } else {
      props.setValue((prevData) => ({
        ...prevData,
        [props.fieldName]: value
      }));
    }
  };

  return (
    <div>
      <textarea
        placeholder={t(props.placeHolder)}
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