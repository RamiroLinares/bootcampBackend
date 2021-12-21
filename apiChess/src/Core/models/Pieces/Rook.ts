import { Piece } from "../Piece";
import { IBoard } from "../IBoard";
import { ISquare } from "../ISquare";

export class Rook extends Piece {
    constructor(white: boolean) {
        super(white);
    }
    isRookNotCollisioning(board: IBoard, start: ISquare, end: ISquare): boolean {
        for (let i = start.getX(); i <= end.getX(); i++) {
            for (let j = start.getY(); j <= end.getY(); j++) {
                if ((i != start.getX() && j != start.getY())
                    && (board.squares[i][j].getPiece() !== null)) {
                    console.log(board.squares[i][j].getPiece().constructor.name)
                    return false;
                } else if (end.getPiece()?.isWhite() === !this.white) {
                    return true;
                }
            }
        }
        return true;;
    }

    isValidMoveForThisPiece(board: IBoard, start: ISquare, end: ISquare) {
        let xStartToEnd = Math.abs(start.getX() - end.getX());
        let yStartToEnd = Math.abs(start.getY() - end.getY());

        if ((xStartToEnd == 0 && yStartToEnd != 0) || (xStartToEnd != 0 && yStartToEnd == 0)) {
            return this.isRookNotCollisioning(board, start, end);
        } else {
            return false;
        }
    }
}