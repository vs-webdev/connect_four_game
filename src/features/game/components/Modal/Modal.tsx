import type { FC } from 'react';
import MenuButton from '../../../../shared/components/Button/MenuButton'
import styles from './Modal.module.scss'
import { useGameStore } from '../../../../store/store';
import { useShallow } from 'zustand/shallow';

interface ModalProps {
  reset: () => void;
}

const Modal: FC<ModalProps> = ({reset}) => {
  const { setIsPaused, quitGame } = useGameStore(useShallow(state => ({
    setIsPaused: state.setIsPaused,
    quitGame: state.quitGame,
  })))

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modalDiv}>
        <h1 className={styles.modalTitle}>Pause</h1>
        <div className={styles.buttonsContainer}>
          <MenuButton 
            title='continue game'
            colorClasses='white'
            justify='center' 
            callback={() => setIsPaused(false)} 
            />

          <MenuButton 
            title='restart'
            colorClasses='white'
            justify='center' 
            callback={reset} 
            />

          <MenuButton 
            title='quit game'
            colorClasses='red'
            justify='center' 
            callback={() => quitGame()} 
            />
        </div>
      </div>
    </div>
  )
}

export default Modal
