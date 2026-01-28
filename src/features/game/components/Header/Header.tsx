import styles from "./Header.module.scss"
import logo from "@/assets/images/logo.svg"
import HeaderButton from "./HeaderButton"
import { useGameStore } from "../../../../store/store"
import { useShallow } from "zustand/shallow"


const Header = () => {
  const { setIsPaused, restartGame } = useGameStore(useShallow(state => ({
    setIsPaused: state.setIsPaused,
    restartGame: state.restartGame,
  })))

  return (
    <div className={styles.headerContainer}>
      <HeaderButton title="menu" handleOnClick={() => setIsPaused(true)} />
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo Icon" className={styles.logo} />
      </div>
      <HeaderButton title="restart" handleOnClick={() => restartGame()} />
    </div>
  )
}

export default Header
