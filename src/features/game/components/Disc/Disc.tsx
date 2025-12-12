import styles from './Disc.module.scss'
import counterRedLarge from '@/assets/images/counter-red-large.svg'
import counterYellowLarge from '@/assets/images/counter-yellow-large.svg'
import { memo, useEffect, useRef, type CSSProperties, type FC } from 'react'
import type { DiscCSSVars } from '../../types/game.types'

interface DiscProps {
  col: number,
  row: number,
  player: 'red' | 'yellow',
  onAnimationEnd: () => void,
}

const Disc: FC<DiscProps> = ({col, row, player, onAnimationEnd}) => {
  const discRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const element = discRef.current
    if (!element) return;

    element.addEventListener("animationend", onAnimationEnd)
    return () => element.removeEventListener("animationend", onAnimationEnd)
  }, [onAnimationEnd])

  const style: CSSProperties & DiscCSSVars = {
    '--col': col,
    '--row': row
  }

  return (
    <div ref={discRef}>
      <img
        src={player === 'red' ? counterRedLarge : counterYellowLarge}
        alt={`${player} disc`}
        className={styles.disc} 
        style={style}
      />
    </div>
  )
}

export default memo(Disc)
