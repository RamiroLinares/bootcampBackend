import { Piece } from "../Piece";
import { IBoard } from "../IBoard";
import { ISquare } from "../ISquare";
export declare class Pawn extends Piece {
    private firstMovement;
    constructor(white: boolean);
    isValidMoveForThisPiece(board: IBoard, start: ISquare, end: ISquare): boolean;
}
