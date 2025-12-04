import styles from './Rules.module.scss'

const Rules = () => {
  const rules = [
    'Red goes first in the first game.',
    'Players must alternate turns, and only one disc can be dropped in each turn.',
    'The game ends when there is a 4-in-a-row or a stalemate.',
    'The starter of the previous game goes second on the next game.'
  ]

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Rules</h1>

      <div className={styles.objectiveContainer}>
        <h2 className={styles.objectiveHeading}>Objective</h2>
        <p>Be the first player to connect 4 of the same colored discs in a row (either vertically, horizontally, or diagonally).</p>
      </div>

      <div>
        <h2 className={styles.rulesHeading}>How to play</h2>
        <ol className={styles.rules}>
          {
            rules.map((rule, index) => (
              <li key={index}>
                <p>{rule}</p>
              </li>
            ))
          }
        </ol>
      </div>

      <button className={styles.checkButton}>
        <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 12L10 18L20 6" stroke="#ffffff" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"/>
        </svg>
      </button>
    </div>
  )
}

export default Rules
