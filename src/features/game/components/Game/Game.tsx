import Board from "../Board/Board"
import ScoreBoard from "../ScoreBoard/ScoreBoard"
import Header from "../Header/Header.tsx"
import styles from "./Game.module.scss"
import Modal from "../Modal/Modal.tsx"
import { useState } from "react"

const Game = () => {
  const [isPause, setIsPause] = useState<boolean>(false)
  return (
    <div className={styles.gameContainer}>
      <Header setIsPause={() => setIsPause(true)} />
      <div className={styles.mainSection}>
        <ScoreBoard player={'red'}/>
        <Board isPause={isPause}/>
        <ScoreBoard player={'yellow'}/>
      </div>
      {isPause && <Modal setIsPause={() => setIsPause(false)} />}
    </div>
  )
}

export default Game
