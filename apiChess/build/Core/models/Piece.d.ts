import { Square } from "./Square";
export declare abstract class Piece {
    protected killed: boolean;
    protected white: boolean;
    constructor(white: boolean);
    isWhite(): boolean;
    setWhite(white: boolean): void;
    isKilled(): boolean;
    setKilled(killed: boolean): void;
    canMove(start: Square, end: Square): boolean;
    movePiece(start: Square, end: Square): boolean;
    abstract isValidMoveForThisPiece(xStartToEnd: number, yStartToEnd: number): boolean;
}
