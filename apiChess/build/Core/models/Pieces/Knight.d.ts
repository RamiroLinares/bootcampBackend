import { Piece } from "../Piece";
export declare class Knight extends Piece {
    constructor(white: boolean);
    isValidMoveForThisPiece(xStartToEnd: number, yStartToEnd: number): boolean;
}
