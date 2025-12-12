import styles from './Board.module.scss'
import { useCallback, useState, type FC } from 'react'
import type { DiscState, Player } from '../../types/game.types'
import { BOARD } from '../../../../config/constants'
import whiteBoard from '@/assets/images/board-layer-white-large.svg'
import blackLayer from '@/assets/images/board-layer-black-large.svg'
import Disc from '../Disc/Disc'
import ColumnButton from '../ColumnButton/ColumnButton'
import Timer from '../Timer/Timer'

const Board: FC = () => {
  const [discs, setDiscs] = useState<DiscState[]>([])
  const [currentPlayer, setCurrentPlayer] = useState<Player>('red')
  const [isAnimating, setIsAnimating] = useState<boolean>(false)

  const togglePlayer = useCallback(() => {
    setCurrentPlayer(prev => prev === 'red' ? 'yellow' : 'red')
  }, [])

  const onAnimationEnd = () => {
    togglePlayer()
    setIsAnimating(false)
  }

  const findAvailableRow = useCallback((column: number): number | null => {
    const discsInColumn = discs.filter(disc => disc.col === column)

    if (discsInColumn.length >= BOARD.ROWS){
      return null;
    }

    return BOARD.BOTTOM_ROW - discsInColumn.length;
  }, [discs])
  
  
  const handleColumnClick = useCallback((column: number): void => {
    if (isAnimating) return;
    setIsAnimating(true)
    const row = findAvailableRow(column)
    if (row === null) return;
    
    const newDisc: DiscState = {
      col: column,
      row,
      player: currentPlayer,
    }
    const newDiscs = [...discs, newDisc]
    setDiscs(prev => [...prev, newDisc])

  }, [findAvailableRow, currentPlayer])


  return (
    <div className={styles.wrapper}>
      <div className={styles.boardContainer}>
        <div>
          <img
            src={whiteBoard}
            className={styles.whiteLayer}
          />
        </div>

        <div className={styles.discContainer}>
          {discs.map((disc) => (
            <Disc 
              key={`${disc.col}-${disc.row}`}
              col={disc.col} 
              row={disc.row} 
              player={disc.player}
              onAnimationEnd={onAnimationEnd}
            />
          ))}
        </div>

        <div>
          <img
            src={blackLayer}
            className={styles.blackLayer}
          />
        </div>
      </div>

      <div className={styles.columnContainer} >
        {Array.from({length: BOARD.COLUMNS}).map((_, index) => (
          <div key={index}>
            <ColumnButton
              columnIndex={index}
              currentPlayer={currentPlayer}
              onColumnClick={handleColumnClick}
            />
          </div>
        ))}
      </div>

      <Timer currentPlayer={currentPlayer} togglePlayer={togglePlayer} />
    </div>
  )
}

export default Board
