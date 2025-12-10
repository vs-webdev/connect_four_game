import styles from './ColumnButton.module.scss'
import markerRed from '../../../../assets/images/marker-red.svg'
import markerYellow from '../../../../assets/images/marker-yellow.svg'
import type { FC } from 'react';
import type { Player } from '../../types/game.types';

interface ColumnButtonProps {
  columnIndex: number;
  currentPlayer: Player;
  onColumnClick: (column: number) => void;
}

const ColumnButton: FC<ColumnButtonProps> = ({onColumnClick, columnIndex, currentPlayer}) => {
  return (
    <div
      className={styles.col}
      key={columnIndex}
      onClick={() => onColumnClick(columnIndex)}
    >
      <div className={styles.markerContainer}>
        <img src={currentPlayer === 'red' ? markerRed : markerYellow} alt="marker" />
      </div>
    </div>
  )
}

export default ColumnButton
