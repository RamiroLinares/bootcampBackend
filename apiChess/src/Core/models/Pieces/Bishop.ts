import { Piece } from "../Piece";
import { IBoard } from "../IBoard";
import { ISquare } from "../ISquare";
export class Bishop extends Piece {
    constructor(white: boolean) {
        super(white);
    }
    isBishopNotCollisioning(board: IBoard, start: ISquare, end: ISquare): boolean {
        let colission = true;
        for (let i = start.getX(); i <= end.getX(); i++) {
            for (let j = start.getY(); j <= end.getY(); j++) {
                if (board.squares[i][j].getPiece() !== null) {
                    colission = false;
                } else if (end.getPiece()?.isWhite() === !this.white) {
                    colission = true;
                }
            }
        }
        return colission;
    }
    isValidMoveForThisPiece(board:IBoard,start: ISquare, end: ISquare) {
        let xStartToEnd = Math.abs(start.getX() - end.getX());
        let yStartToEnd = Math.abs(start.getY() - end.getY());
        if(xStartToEnd===yStartToEnd){
            return this.isBishopNotCollisioning(board,start,end);
        }else{
            return false;
        }
    }
}