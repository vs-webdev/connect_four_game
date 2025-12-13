import styles from "./Header.module.scss"
import logo from "@/assets/images/logo.svg"
import HeaderButton from "./HeaderButton"

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <HeaderButton title="menu" />
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo Icon" className={styles.logo} />
      </div>
      <HeaderButton title="restart" />
    </div>
  )
}

export default Header
