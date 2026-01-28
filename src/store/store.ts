import { create } from "zustand";
import type { DiscState, Player } from "../features/game/types/game.types";

type Screen = 'mainMenu' | 'rules' | 'pvp' | 'pvc'

export interface ConnectFourStore {
  currentScreen: Screen;
  boardDiscs: DiscState[];
  currentPlayer: Player;
  isPaused: boolean;
  timeRemaining: number;
  
  setScreen: (v: Screen) => void;
  updateBoardDiscs: (disc: DiscState) => void;
  toggleCurrentPlayer: () => void;
  setIsPaused: (paused: boolean) => void;
  resetTimer: () => void;
  advanceTimer: () => void;
  restartGame: () => void;
  quitGame: () => void;
}

export const useGameStore = create<ConnectFourStore>((set, get) => ({
  currentScreen: 'mainMenu',
  boardDiscs: [],
  currentPlayer: 'red',
  isPaused: false,
  timeRemaining: 30,

  setScreen: (screen) => set(() => ({
    currentScreen: screen,
  })),

  updateBoardDiscs: (disc) => set(state => ({
    boardDiscs: [...state.boardDiscs, disc]
  })),

  toggleCurrentPlayer: () => set(state => ({
    currentPlayer: state.currentPlayer === 'red' ? 'yellow' : 'red'
  })),

  setIsPaused: (paused) => set(() => ({
    isPaused: paused
  })),

  resetTimer: () => set(() => ({
    timeRemaining: 30,
  })),

  advanceTimer: () => {
    const { isPaused } = get();
    if (isPaused) return;

    set(state => {
      if (state.timeRemaining <= 1) {
        return {
          timeRemaining: 30,
          currentPlayer: state.currentPlayer === 'red' ? 'yellow' : 'red',
        }
      }

      return {
        timeRemaining: state.timeRemaining - 1,
      }
    })
  },

  restartGame: () => set(() => ({
    timeRemaining: 30,
    boardDiscs: [],
    isPaused: false,
    currentPlayer: 'red',
  })),

  quitGame: () => set(() => ({
    timeRemaining: 30,
    currentScreen: 'mainMenu',
    boardDiscs: [],
    isPaused: false,
    currentPlayer: 'red',
  })),
}))