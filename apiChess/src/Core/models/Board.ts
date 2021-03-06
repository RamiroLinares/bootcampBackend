import { Square } from './Square';
import { King } from './Pieces/King';
import { Queen } from './Pieces/Queen';
import { Bishop } from './Pieces/Bishop';
import { Rook } from './Pieces/Rook';
import { Knight } from './Pieces/Knight';
import { Pawn } from './Pieces/Pawn';
import { ISquare } from './ISquare';
import { IBoard } from './IBoard';

export class Board implements IBoard {
    squares: ISquare[][];
    private minBoardSpace: number = 0;
    private maxBoardSpace: number = 7;

    constructor() {
        this.squares = []

        for (var i: number = this.minBoardSpace; i <= this.maxBoardSpace; i++) {
            this.squares[i] = [];
        }
        this.resetBoard();
    }

    getBox(x: number, y: number): any {
        if (x < this.minBoardSpace || x > this.maxBoardSpace
            || y < this.minBoardSpace || y > this.maxBoardSpace) {
            throw console.error("out of Board");
        }
        return this.squares[x][y];
    }
    emptyBoard() {
        for (let i = this.minBoardSpace; i <= this.maxBoardSpace; i++) {
            for (let j = this.minBoardSpace; j <= this.maxBoardSpace; j++) {
                this.squares[i][j] = new Square(i, j, null);
            }
        }
    }
    resetBoard() {
        // initialize white pieces
        this.squares[0][0] = new Square(0, 0, new Rook(true));
        this.squares[0][1] = new Square(0, 1, new Knight(true));
        this.squares[0][2] = new Square(0, 2, new Bishop(true));
        this.squares[0][3] = new Square(0, 3, new King(true));
        this.squares[0][4] = new Square(0, 4, new Queen(true));
        this.squares[0][5] = new Square(0, 5, new Bishop(true));
        this.squares[0][6] = new Square(0, 6, new Knight(true));
        this.squares[0][7] = new Square(0, 7, new Rook(true));
        for (let i = this.minBoardSpace; i <= this.maxBoardSpace; i++) {
            this.squares[1][i] = new Square(1, i, new Pawn(true));
        }
        //this.squares[0][3].getPiece().canMove(this.squares[0][1],this.squares[0][2])
        // initialize black pieces
        this.squares[7][0] = new Square(7, 0, new Rook(false));
        this.squares[7][1] = new Square(7, 1, new Knight(false));
        this.squares[7][2] = new Square(7, 2, new Bishop(false));
        this.squares[7][3] = new Square(7, 3, new King(false));
        this.squares[7][4] = new Square(7, 4, new Queen(false));
        this.squares[7][5] = new Square(7, 5, new Bishop(false));
        this.squares[7][6] = new Square(7, 6, new Knight(false));
        this.squares[7][7] = new Square(7, 7, new Rook(false));
        for (let i = 0; i <= 7; i++) {
            this.squares[6][i] = new Square(6, i, new Pawn(false));
        }

        // initialize remaining squares without pieces
        for (let i = 2; i < 6; i++) {
            for (let j = 0; j < 8; j++) {
                this.squares[i][j] = new Square(i, j, null);
            }
        }
    }
}