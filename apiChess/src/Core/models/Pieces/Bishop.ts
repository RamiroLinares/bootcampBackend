import { Piece } from "../Piece";
import { IBoard } from "../IBoard";
import { ISquare } from "../ISquare";
export class Bishop extends Piece {
    constructor(white: boolean) {
        super(white);
    }
    isBishopNotCollisioning(board: IBoard, start: ISquare, end: ISquare): boolean {
        const dirX: number = end.getX() > start.getX() ? 1 : -1;
        const dirY: number = end.getY() > start.getY() ? 1 : -1;
        for (let i = 1; i <= Math.abs(end.getX() - start.getX()) - 1; ++i) {
            if (board.squares[start.getX() + i * dirX][start.getY() + i * dirY].getPiece() !== null) {
                return false;
            } else if (end.getPiece()?.isWhite() === !this.white) {
                return true;
            }
        }
        return true;
    }
    isValidMoveForThisPiece(board: IBoard, start: ISquare, end: ISquare) {
        const xStartToEnd = Math.abs(start.getX() - end.getX());
        const yStartToEnd = Math.abs(start.getY() - end.getY());

        if (xStartToEnd === yStartToEnd) {
            return this.isBishopNotCollisioning(board, start, end);
        } else {
            return false;
        }
    }
}