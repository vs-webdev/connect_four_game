import type { FC, MouseEvent } from "react";
import styles from './MenuButton.module.scss'

interface ButtonProps {
  title: string;
  buttonClasses: string;
  icon?: string;
  callback: (event: MouseEvent<HTMLButtonElement>) => void;
}
const MenuButton: FC<ButtonProps> = ({title, buttonClasses, icon, callback}) => {
  return (
    <button
      className={`${styles.baseButton} ${buttonClasses}`}
      onClick={callback}
    >
      {title}
      {icon && (
        <img
        src={icon}
        alt={`${title} icon`}
        className={`${styles.buttonIcon}`}
        />
      )}
    </button>
  )
}

export default MenuButton
