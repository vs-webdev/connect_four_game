
export type Player = 'red' | 'yellow';

export interface DiscState {
  col: number;
  row: number;
  player: Player;
}

export type DiscCSSVars = {
  '--col': number
  '--row': number
}

export interface DiscProps {
  col: number,
  row: number,
  player: 'red' | 'yellow',
}