import styles from './Disc.module.scss'
import { memo, type CSSProperties, type FC } from 'react'
import counterRedLarge from '@/assets/images/counter-red-large.svg'
import counterYellowLarge from '@/assets/images/counter-yellow-large.svg'

type DiscCSSVars = {
  '--col': number
  '--row': number
}

interface DiscProps {
  col: number,
  row: number,
  player: 'red' | 'yellow',
}

const Disc: FC<DiscProps> = ({col, row, player}) => {
  const style: CSSProperties & DiscCSSVars = {
    '--col': col,
    '--row': row
  }

  return (
    <div>
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
