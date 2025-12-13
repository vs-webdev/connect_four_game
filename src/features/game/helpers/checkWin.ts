import type { DiscState, Player } from "../types/game.types";
type Position = {col: number, row: number}


const checkWin = (
  lastCol: number, 
  lastRow: number, 
  player: Player, 
  newDiscs: DiscState[]
): Position[] | null => {
  const directions = [
    [1,0],
    [0,1],
    [1,1],
    [1,-1],
  ] as const;

  const hasDisc = (col: number, row: number) => 
    newDiscs.some(d => d.col === col && d.row === row && d.player === player)

  const collectInDirection = (dx: number, dy: number) => {
    const result: Position[] = []
    let col = lastCol + dx;
    let row = lastRow + dy;

    while (hasDisc(col, row)) {
      result.push({col, row})
      col += dx;
      row += dy;
    }

    return result
  }

  for (const [dx, dy] of directions) {
    const forward = collectInDirection(dx, dy)
    const backward = collectInDirection(-dx, -dy)

    const line: Position[] = [
      ...backward.reverse(),
      {col: lastCol, row: lastRow},
      ...forward,
    ]
    
    if (line.length >= 4) {
      return line
    }
  }

  return null
}

export default checkWin;