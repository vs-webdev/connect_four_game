import styles from './MainMenu.module.scss'
import logo from '../../assets/images/logo.svg'
import pvc from '../../assets/images/player-vs-cpu.svg'
import pvp from '../../assets/images/player-vs-player.svg'
import MenuButton from '../../shared/components/Button/MenuButton'

const MainMenu = () => {
  const handlePVCButton = () => {
    return;
  }
  const handlePVPButton = () => {
    return;
  }
  const handleRulesButton = () => {
    return;
  }

  return (
    <div className={styles.mainMenuContainer}>
      <img src={logo} />
      
      <div className={styles.buttonsContainer}>
        <MenuButton 
          title='Player Vs Cpu'
          colorClasses='red'
          justify='between'
          icon={pvc}
          callback={handlePVCButton}
          />

        <MenuButton 
          title='Player Vs Player'
          colorClasses='yellow'
          justify='between'
          icon={pvp}
          callback={handlePVPButton}
          />

        <MenuButton 
          title='Rules'
          colorClasses='white'
          justify='between'
          callback={handleRulesButton}
        />
      </div>
    </div>
  )
}

export default MainMenu
