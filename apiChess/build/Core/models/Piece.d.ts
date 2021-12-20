import { ISquare } from "./ISquare";
import { IPiece } from './IPiece';
import { IBoard } from "./IBoard";
export declare abstract class Piece implements IPiece {
    protected killed: boolean;
    protected white: boolean;
    constructor(white: boolean);
    isWhite(): boolean;
    setWhite(white: boolean): void;
    isKilled(): boolean;
    setKilled(killed: boolean): void;
    canMove(board: IBoard, start: ISquare, end: ISquare): boolean;
    movePiece(board: IBoard, start: ISquare, end: ISquare): boolean;
    abstract isValidMoveForThisPiece(board: IBoard, start: ISquare, end: ISquare): boolean;
}
