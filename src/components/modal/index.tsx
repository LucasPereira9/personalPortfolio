import { useSpring, animated } from '@react-spring/web';
import styles from './Modal.module.css';
import { IModalProps } from './modal.structure';

const Modal = (props:IModalProps) => {
  const animation = useSpring({
    opacity: props.isModalOpen ? 1 : 0,
    transform: props.isModalOpen ? `translateY(0%)` : `translateY(-100%)`,
    config: { tension: 200, friction: 20 },
  });

  if (!props.isModalOpen) {
    return null;
  }

  return (
    <div className={styles.backdrop} onClick={props.setIsModalOpen}>
      <animated.div style={animation} className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={props.setIsModalOpen}>X</button>
        {props.children}
      </animated.div>
    </div>
  );
};

export default Modal;