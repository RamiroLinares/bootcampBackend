import { Piece } from "../Piece";
export declare class Bishop extends Piece {
    constructor(white: boolean);
    isInt(n: any): boolean;
    isValidMoveForThisPiece(xStartToEnd: number, yStartToEnd: number): boolean;
}
