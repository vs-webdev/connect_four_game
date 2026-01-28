import { useEffect } from 'react'
import turnBackgroundRed from '../../../../assets/images/turn-background-red.svg'
import turnBackgroundYellow from '../../../../assets/images/turn-background-yellow.svg'
import styles from './Timer.module.scss'
import { useGameStore } from '../../../../store/store'
import { useShallow } from 'zustand/shallow'

const Timer = () => {
  const { 
    currentPlayer, 
    timeRemaining, 
    advanceTimer, 
    isPaused, 
    resetTimer 
  } = useGameStore(useShallow(state => ({
    currentPlayer: state.currentPlayer,
    toggleCurrentPlayer: state.toggleCurrentPlayer,
    timeRemaining: state.timeRemaining,
    advanceTimer: state.advanceTimer,
    isPaused: state.isPaused,
    resetTimer: state.resetTimer,
  })))

  useEffect(() => {
    if (isPaused) return;
  
    const timer = setInterval(() => {
      advanceTimer()
    }, 1000);

    return () => clearInterval(timer)
  }, [isPaused])

  useEffect(() => {
    resetTimer()
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
