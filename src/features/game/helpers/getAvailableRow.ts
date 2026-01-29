import type { DiscState } from "../types/game.types";
import { BOARD } from "../../../config/constants";

export const getAvailableRow = (column: number, discs: DiscState[]): number | null => {
  const discsInColumn = discs.filter((disc) => disc.col === column)

  if (discsInColumn.length >= BOARD.ROWS){
    return null;
  }

  return BOARD.BOTTOM_ROW - discsInColumn.length;
}
