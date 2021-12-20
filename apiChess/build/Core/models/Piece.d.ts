import { ISquare } from "./ISquare";
export declare abstract class Piece {
    protected killed: boolean;
    protected white: boolean;
    constructor(white: boolean);
    isWhite(): boolean;
    setWhite(white: boolean): void;
    isKilled(): boolean;
    setKilled(killed: boolean): void;
    canMove(start: ISquare, end: ISquare): boolean;
    movePiece(start: ISquare, end: ISquare): boolean;
    abstract isValidMoveForThisPiece(xStartToEnd: number, yStartToEnd: number): boolean;
}
