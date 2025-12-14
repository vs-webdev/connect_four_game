import type { FC, MouseEvent } from "react";
import styles from './MenuButton.module.scss'

type Justify = "between" | "center"
type Color = "red" | "yellow" | "white"

interface ButtonProps {
  title: string;
  colorClasses: Color;
  justify: Justify;
  icon?: string;
  callback: (event: MouseEvent<HTMLButtonElement>) => void;
}
const MenuButton: FC<ButtonProps> = ({title, colorClasses, justify, icon, callback}) => {
  return (
    <button
      className={`${styles.baseButton} ${styles[colorClasses]} ${styles[justify]}`}
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
