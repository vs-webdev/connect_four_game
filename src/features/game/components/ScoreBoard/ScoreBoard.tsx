import styles from './ScoreBoard.module.scss'
import playerOne from '@/assets/images/player-one.svg'

const ScoreBoard = () => {
  return (
    <div className={styles.scoreContainer}>
      Player 1
      <span className={styles.score}>0</span>
      <img 
        src={playerOne} 
        alt="Player Icon" 
        className={styles.playerIcon}
      />
    </div>
  )
}

export default ScoreBoard
