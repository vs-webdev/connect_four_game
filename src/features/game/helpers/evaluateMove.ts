import type { DiscState, Player } from "../types/game.types";

const ROWS = 7;
const COLS = 6;

const buildGrid = (discs: DiscState[]) => {
  const grid: (Player | null)[][] = Array.from({length: ROWS}, () => 
    Array(COLS).fill(null)
  )

  for (const d of discs) {
    grid[d.row][d.col] = d.player;
  }

  return grid;
}

const scoreWindow = (
  window: (Player | null)[], 
  ai: Player, 
  player: Player
) => {
  const aiCount = window.filter(v => v === ai).length;
  const humanCount = window.filter(v => v === player).length;
  const emptyCount = window.filter(v => v === null).length;

  if (aiCount === 4) return 100000;
  if (humanCount === 4) return -100000;

  if (aiCount === 3 && emptyCount === 1) return 100;
  if (aiCount === 2 && emptyCount === 2) return 10;

  if (humanCount === 3 && emptyCount === 1) return -120;

  return 0;
}

export const evaluateMove = (
  discs: DiscState[], 
  ai: Player, 
  player: Player
) => {
  const grid = buildGrid(discs)
  let score = 0;

  // center column bias
  const centerCol = Math.floor(COLS / 2)
  for (let r = 0; r < ROWS; r++) {
    if (grid[r][centerCol] === ai) score += 6;
  }

  // Horizontal
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS - 3; c++) {
      const window = [
        grid[r][c],
        grid[r][c + 1],
        grid[r][c + 2],
        grid[r][c + 3],
      ]
      score += scoreWindow(window, ai, player)
    }
  }

  // Vertical
  for (let c = 0; c < COLS; c++) {
    for (let r = 0; r < ROWS - 3; r++) {
      const window = [
        grid[r][c],
        grid[r + 1][c],
        grid[r + 2][c],
        grid[r + 3][c],
      ]
      score += scoreWindow(window, ai, player)
    }
  }

  // Diagonal \
  for (let r = 0; r < ROWS - 3; r++) {
    for (let c = 0; c < COLS - 3; c++) {
      const window = [
        grid[r][c],
        grid[r + 1][c + 1],
        grid[r + 2][c + 2],
        grid[r + 3][c + 3],
      ];
      score += scoreWindow(window, ai, player)
    }
  }

  // Diagonal /
  for (let r = 3; r < ROWS; r++) {
    for (let c = 0; c < COLS - 3; c++) {
      const window = [
        grid[r][c],
        grid[r - 1][c + 1],
        grid[r - 2][c + 2],
        grid[r - 3][c + 3],
      ];
      score += scoreWindow(window, ai, player)
    }
  }

  return score;
}