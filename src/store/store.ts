import { create } from "zustand";
import type { DiscState, Player } from "../features/game/types/game.types";

type Screen = 'mainMenu' | 'rules' | 'pvp' | 'pvc'

export interface ConnectFourStore {
  currentScreen: Screen;
  boardDiscs: DiscState[];
  currentPlayer: Player;
  isPaused: boolean;
  
  setScreen: (v: Screen) => void;
  updateBoardDiscs: (disc: DiscState) => void;
  toggleCurrentPlayer: () => void;
  setPaused: (paused: boolean) => void;
}

export const useGameStore = create<ConnectFourStore>((set) => ({
  currentScreen: 'mainMenu',
  boardDiscs: [],
  currentPlayer: 'red',
  isPaused: false,

  setScreen: (screen) => set(() => ({
    currentScreen: screen,
  })),

  updateBoardDiscs: (disc) => set(state => ({
    boardDiscs: [...state.boardDiscs, disc]
  })),

  toggleCurrentPlayer: () => set(state => ({
    currentPlayer: state.currentPlayer === 'red' ? 'yellow' : 'red'
  })),

  setPaused: (paused) => set(() => ({
    isPaused: paused
  })),
}))