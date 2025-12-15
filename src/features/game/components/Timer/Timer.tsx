import { useEffect, useState, type FC } from 'react'
import turnBackgroundRed from '../../../../assets/images/turn-background-red.svg'
import turnBackgroundYellow from '../../../../assets/images/turn-background-yellow.svg'
import styles from './Timer.module.scss'
import type { Player } from '../../types/game.types'

interface TimerProps {
  currentPlayer: Player;
  togglePlayer: () => void;
  isPause: boolean;
}

const Timer: FC<TimerProps> = ({currentPlayer, togglePlayer, isPause}) => {
  const [timeRemaining, setTimeRemaining] = useState(30)

  useEffect(() => {
    if (isPause) return;
  
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 0) {
          return 30
        }
        return prev - 1;
      })
    }, 1000);

    return () => clearInterval(timer)
  }, [isPause])

  // Toggles Player once timer reaches 0
  useEffect(() => {
    if (timeRemaining <= 0) togglePlayer()
  }, [timeRemaining])

  // Reset Timer when currentPlayer changes
  useEffect(() => {
    setTimeRemaining(30);
  }, [currentPlayer]); 

  return (
    <div className={styles.timerWrapper}>
      <div className={styles.timerContainer}>
        <img
          src={currentPlayer === 'red' ? turnBackgroundRed : turnBackgroundYellow}
          alt="Turn background"
          className={styles.timerBg}
        />
        <div className={styles.timerContent}>
          <p className={styles.timerpara}>
            Player {currentPlayer === 'red' ? '1' : '2'}s turn
          </p>
          <span className={styles.timeRemaining}>{timeRemaining}s</span>
        </div>
      </div>
    </div>
  )
}

export default Timer
