import { Piece } from "../Piece";
import { IBoard } from "../IBoard";
import { ISquare } from "../ISquare";
import { Bishop } from './Bishop';
import { Rook } from './Rook';

export class Queen extends Piece {
    private bishop: Bishop;
    private rook: Rook;
    constructor(white: boolean) {
        super(white);
        this.bishop = new Bishop(white);
        this.rook = new Rook(white);
    }

    isValidMoveForThisPiece(board: IBoard, start: ISquare, end: ISquare) {
        return (this.bishop.isValidMoveForThisPiece(board, start, end)
            || this.rook.isValidMoveForThisPiece(board, start, end));
    }
}