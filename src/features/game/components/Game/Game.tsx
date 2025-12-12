import Board from "../Board/Board"
import ScoreBoard from "../ScoreBoard/ScoreBoard"
import styles from "./Game.module.scss"

const Game = () => {
  return (
    <div className={styles.gameContainer}>
      <ScoreBoard />
      <Board />
      <ScoreBoard />
    </div>
  )
}

export default Game
