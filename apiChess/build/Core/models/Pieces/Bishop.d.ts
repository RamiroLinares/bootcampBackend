import { Piece } from "../Piece";
import { IBoard } from "../IBoard";
import { ISquare } from "../ISquare";
export declare class Bishop extends Piece {
    constructor(white: boolean);
    isBishopNotCollisioning(board: IBoard, start: ISquare, end: ISquare): boolean;
    isValidMoveForThisPiece(board: IBoard, start: ISquare, end: ISquare): boolean;
}
