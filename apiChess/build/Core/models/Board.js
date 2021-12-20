"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
const Square_1 = require("./Square");
const King_1 = require("./Pieces/King");
const Queen_1 = require("./Pieces/Queen");
const Bishop_1 = require("./Pieces/Bishop");
const Rook_1 = require("./Pieces/Rook");
const Knight_1 = require("./Pieces/Knight");
const Pawn_1 = require("./Pieces/Pawn");
class Board {
    constructor() {
        this.squares = [];
        for (var i = 0; i <= 7; i++) {
            this.squares[i] = [];
        }
        this.resetBoard();
    }
    getBox(x, y) {
        if (x < 0 || x > 7 || y < 0 || y > 7) {
            throw console.error("out of Board");
        }
        return this.squares[x][y];
    }
    resetBoard() {
        // initialize white pieces
        this.squares[0][0] = new Square_1.Square(0, 0, new Rook_1.Rook(true));
        this.squares[0][1] = new Square_1.Square(0, 1, new Knight_1.Knight(true));
        this.squares[0][2] = new Square_1.Square(0, 2, new Bishop_1.Bishop(true));
        this.squares[0][3] = new Square_1.Square(0, 3, new King_1.King(true));
        this.squares[0][4] = new Square_1.Square(0, 4, new Queen_1.Queen(true));
        this.squares[0][5] = new Square_1.Square(0, 5, new Bishop_1.Bishop(true));
        this.squares[0][6] = new Square_1.Square(0, 6, new Knight_1.Knight(true));
        this.squares[0][7] = new Square_1.Square(0, 7, new Rook_1.Rook(true));
        for (let i = 0; i <= 7; i++) {
            this.squares[1][i] = new Square_1.Square(1, i, new Pawn_1.Pawn(true));
        }
        //this.squares[0][3].getPiece().canMove(this.squares[0][1],this.squares[0][2])
        // initialize black pieces
        this.squares[7][0] = new Square_1.Square(7, 0, new Rook_1.Rook(false));
        this.squares[7][1] = new Square_1.Square(7, 1, new Knight_1.Knight(false));
        this.squares[7][2] = new Square_1.Square(7, 2, new Bishop_1.Bishop(false));
        this.squares[7][3] = new Square_1.Square(7, 3, new King_1.King(false));
        this.squares[7][4] = new Square_1.Square(7, 4, new Queen_1.Queen(false));
        this.squares[7][5] = new Square_1.Square(7, 5, new Bishop_1.Bishop(false));
        this.squares[7][6] = new Square_1.Square(7, 6, new Knight_1.Knight(false));
        this.squares[7][7] = new Square_1.Square(7, 7, new Rook_1.Rook(false));
        for (let i = 0; i <= 7; i++) {
            this.squares[6][i] = new Square_1.Square(6, i, new Pawn_1.Pawn(false));
        }
        // initialize remaining squares without pieces
        for (let i = 2; i < 6; i++) {
            for (let j = 0; j < 8; j++) {
                this.squares[i][j] = new Square_1.Square(i, j, null);
            }
        }
    }
}
exports.Board = Board;
//# sourceMappingURL=Board.js.map