import { ISquare } from "./ISquare";

export interface IPiece{
    isWhite():boolean;
    setWhite(white:boolean):void;
    isKilled():boolean;
    setKilled(killed:boolean):void;
    canMove(start: ISquare, end: ISquare):boolean;
    movePiece(start: ISquare, end: ISquare):boolean;
    isValidMoveForThisPiece(xStartToEnd:number,yStartToEnd:number):boolean;
}