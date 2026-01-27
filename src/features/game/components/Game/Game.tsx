import Board from "../Board/Board"
import ScoreBoard from "../ScoreBoard/ScoreBoard"
import Header from "../Header/Header.tsx"
import styles from "./Game.module.scss"
import Modal from "../Modal/Modal.tsx"
import { type FC } from "react"
import { useGameStore } from "../../../../store/store.ts"

type OppositionType = 'pvp' | 'pvc'

interface GameProps {
  opp: OppositionType;
}

const Game: FC<GameProps> = ({opp}) => {
  const isPaused = useGameStore(state => state.isPaused)

  return (
    <div className={styles.gameContainer}>
      <Header />
      <div className={styles.mainSection}>
        <ScoreBoard player={'red'}/>
        <Board />
        <ScoreBoard player={'yellow'}/>
      </div>
      {isPaused && <Modal />}
    </div>
  )
}

export default Game
