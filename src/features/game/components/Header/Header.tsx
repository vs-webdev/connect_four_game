import styles from "./Header.module.scss"
import logo from "@/assets/images/logo.svg"
import HeaderButton from "./HeaderButton"
import { useGameStore } from "../../../../store/store"


const Header = () => {
  const setIsPaused = useGameStore(state => state.setIsPaused)

  return (
    <div className={styles.headerContainer}>
      <HeaderButton title="menu" handleOnClick={() => setIsPaused(true)} />
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo Icon" className={styles.logo} />
      </div>
      <HeaderButton title="restart" />
    </div>
  )
}

export default Header
