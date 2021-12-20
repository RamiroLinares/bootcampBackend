import { ISquare } from "./ISquare";
import { IBoard } from "./IBoard";
export interface IPiece {
    isWhite(): boolean;
    setWhite(white: boolean): void;
    isKilled(): boolean;
    setKilled(killed: boolean): void;
    canMove(board: IBoard, start: ISquare, end: ISquare): boolean;
    movePiece(board: IBoard, start: ISquare, end: ISquare): boolean;
    isValidMoveForThisPiece(board: IBoard, start: ISquare, end: ISquare): boolean;
}
