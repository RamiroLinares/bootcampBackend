import { Piece } from "../Piece";
export declare class Queen extends Piece {
    constructor(white: boolean);
    isValidMoveForThisPiece(xStartToEnd: number, yStartToEnd: number): boolean;
}
