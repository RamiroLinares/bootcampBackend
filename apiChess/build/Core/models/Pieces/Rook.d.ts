import { Piece } from "../Piece";
export declare class Rook extends Piece {
    constructor(white: boolean);
    isValidMoveForThisPiece(xStartToEnd: number, yStartToEnd: number): boolean;
}
