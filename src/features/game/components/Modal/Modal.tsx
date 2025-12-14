import type { FC } from 'react';
import MenuButton from '../../../../shared/components/Button/MenuButton'
import styles from './Modal.module.scss'

interface ModalProps {
  setIsPause: () => void;
}

const Modal: FC<ModalProps> = () => {
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modalDiv}>
        <h1 className={styles.modalTitle}>Pause</h1>
        <div className={styles.buttonsContainer}>
          <MenuButton 
            title='continue game'
            colorClasses='white'
            justify='center' 
            callback={() => null}
            />

          <MenuButton 
            title='restart'
            colorClasses='white'
            justify='center' 
            callback={() => null} 
            />

          <MenuButton 
            title='quit game'
            colorClasses='red'
            justify='center' 
            callback={() => null} 
            />
        </div>
      </div>
    </div>
  )
}

export default Modal
