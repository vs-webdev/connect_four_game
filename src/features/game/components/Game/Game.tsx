import Board from "../Board/Board"
import ScoreBoard from "../ScoreBoard/ScoreBoard"
import Header from "../Header/Header.tsx"
import styles from "./Game.module.scss"

const Game = () => {
  return (
    <div className={styles.gameContainer}>
      <Header />
      <div className={styles.mainSection}>
        <ScoreBoard player={'red'}/>
        <Board />
        <ScoreBoard player={'yellow'}/>
      </div>
    </div>
  )
}

export default Game
