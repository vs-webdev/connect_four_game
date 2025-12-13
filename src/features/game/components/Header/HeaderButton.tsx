import type { FC } from "react"
import styles from "./HeaderButton.module.scss"

interface HeaderButtonProps {
  title: string;
  handleOnClick: () => void;
}

const HeaderButton: FC<HeaderButtonProps> = ({title, handleOnClick}) => {
  return (
    <button 
      className={styles.headerButton}
      onClick={handleOnClick}
    >
      {title}
    </button>
  )
}

export default HeaderButton
