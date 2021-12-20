import { ISquare } from "./ISquare";
import { IPiece } from './IPiece';
export declare abstract class Piece implements IPiece {
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
