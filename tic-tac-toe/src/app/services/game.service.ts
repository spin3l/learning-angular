import { Injectable } from '@angular/core';

import { Square } from '../types'; 

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public board: Square[] = [];
  boardSize: number = 9;
  activePlayer: string = "X";
  turnCount = 0;
  isGameRunning: boolean = false;
  isGameOver: boolean = false;
  winner: boolean = false;

  constructor() {
    this.newGame()
  }

  newGame() {
    this.activePlayer = "X";
    this.turnCount = 0;
    this.isGameRunning = false;
    this.isGameOver = false;
    this.winner = false;
    this.board = this.createBoard();
  }

  createBoard() {
    let board = [];
    for (let i = 0; i < 9; i++) {
      board.push({ id: i, state: null })
    };
    return board
  }

  get getBoard() {
    return this.board
  }

  set setBoard(board: Square[]) {
    this.board = [...board]
  }

  changePlayerTurn(squareClicked: Square) {
    this.updateBoard(squareClicked)
    if (!this.isGameOver) {
      this.activePlayer = this.activePlayer === "X" ? "O" : "X"
    }
    this.turnCount++;
    this.isGameOver = this.isGameOver ? true : false;
  }

  updateBoard(squareClicked: Square) {
    this.board[squareClicked.id].state = squareClicked.state
    if (this.isWinner) {
      this.winner = true;
      this.isGameRunning = false;
      this.isGameOver = true;
    }
  }

  get gameOver(): boolean {
    return this.turnCount > 8 || this.winner ? true : false
  }

  get isWinner(): boolean {
    return this.checkDiag() || this.checkRows(this.board, "ROW") || this.checkRows(this.board, "COL") ? true : false;
  }

  checkRows(board: Square[], mode: "ROW" | "COL"): boolean {

    const
      ROW = mode === "ROW" ? true : false,
      DIST = ROW ? 1 : 3,
      INC = ROW ? 3 : 1,
      NUMTIMES = ROW ? 7 : 3;

    for (let i = 0; i < NUMTIMES; i += INC) {

      let
        firstSquare = board[i].state,
        secondSquare = board[i + DIST].state,
        thirdSquare = board[i + (DIST * 2)].state;

      if (
        firstSquare && 
        firstSquare === secondSquare && 
        secondSquare === thirdSquare) {
          return true
        }
    }
    return false
  }

  checkDiag() {
    const timesRun = 2,
      midSquare = this.board[4].state;

    for (let i = 0; i <= timesRun; i += 2) {

      let
        upperCorner = this.board[i].state,
        lowerCorner = this.board[8 - i].state;

      if (midSquare && midSquare === upperCorner && upperCorner === lowerCorner) { 
        return true;
      }
    }

    return false;
  }

}