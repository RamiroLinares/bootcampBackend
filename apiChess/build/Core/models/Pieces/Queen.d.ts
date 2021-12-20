import { Piece } from "../Piece";
import { IBoard } from "../IBoard";
export declare class Queen extends Piece {
    constructor(white: boolean);
    isValidMoveForThisPiece(board: IBoard, xStartToEnd: number, yStartToEnd: number): boolean;
}
