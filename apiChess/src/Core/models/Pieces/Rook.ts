import { Piece } from "../Piece";
import { IBoard } from "../IBoard";
import { ISquare } from "../ISquare";

export class Rook extends Piece {
    constructor(white: boolean) {
        super(white);
    }
    isRookNotCollisioning(board: IBoard, start: ISquare, end: ISquare,xStartToEnd:number,yStartToEnd:number): boolean {
        const axisMovement:number=0;
        if(xStartToEnd===axisMovement){
            for (let j = start.getY(); j <= end.getY(); j++) {
                if ((j !== start.getY())
                    && (board.squares[start.getX()][j].getPiece() !== null)) {
                    console.log(board.squares[start.getX()][j].getPiece().constructor.name)
                    return false;
                } else if (end.getPiece()?.isWhite() === !this.white) {
                    return true;
                }
            }
        }else if(yStartToEnd===axisMovement){
            for (let i = start.getX(); i <= end.getX(); i++) {
                if ((i !== start.getX())
                    && (board.squares[i][start.getY()].getPiece() !== null)) {
                    return false;
                } else if (end.getPiece()?.isWhite() === !this.white) {
                    return true;
                }
            }}
        return true;;
    }

    isValidMoveForThisPiece(board: IBoard, start: ISquare, end: ISquare) {
        let xStartToEnd = Math.abs(start.getX() - end.getX());
        let yStartToEnd = Math.abs(start.getY() - end.getY());
        const axisMovement:number=0;
        if ((xStartToEnd === axisMovement && yStartToEnd !== axisMovement) 
        || (xStartToEnd !== axisMovement && yStartToEnd === axisMovement)) {
            return this.isRookNotCollisioning(board, start, end,xStartToEnd,yStartToEnd);
        } else {
            return false;
        }
    }
}