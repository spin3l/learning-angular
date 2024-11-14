import { Injectable } from '@angular/core';
import { SquareValue } from '../types';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public board: SquareValue[] = [];
  activePlayer: SquareValue = "X";
  winner: SquareValue = null;
  turnCount = 0;
  isGameRunning: boolean = false;
  isGameOver: boolean = false;

  constructor() {
    this.newGame();
  }

  newGame() {
    this.activePlayer = "X";
    this.winner = null;
    this.turnCount = 0;
    this.isGameRunning = false;
    this.isGameOver = false;
    this.board = Array(9).fill(null);
  }

  squareInteraction(idx: number) {
    if (this.board[idx] || this.isGameOver) return;
    if (!this.turnCount) this.isGameRunning = true;

    this.board[idx] = this.activePlayer;
    this.turnCount++;

    if (this._isGameOver) {
      this.isGameRunning = false;
      this.isGameOver = true;
      this.winner = this.activePlayer;
    } else {
      this.activePlayer = this.activePlayer === "X" ? "O" : "X";
    }
  }

  get _isGameOver(): boolean {
    if (this.turnCount > 8) return true;

    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.board[a] &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
      ) {
        return true;
      }
    }
    return false;
  }
}