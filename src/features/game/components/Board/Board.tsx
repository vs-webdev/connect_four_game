import styles from './Board.module.scss'

const Board = () => {
  const cells = Array.from({length: 6}, () => Array.from({length: 7}))
  return (
    <div className={styles.boardContainer}>
      <div className={styles.cellContainer}>
        {
          cells.map((col) => (
              col.map((_, rowIndex) => (
                <div 
                  className={styles.rowDiv} 
                  key={rowIndex}
                />
              ))
          ))
        }
      <div className={styles.disc}></div>
      </div>
    </div>
  )
}

export default Board
