import { Piece } from "../Piece";
import { IPiece } from '../IPiece';
export declare class Bishop extends Piece implements IPiece {
    constructor(white: boolean);
    isValidMoveForThisPiece(xStartToEnd: number, yStartToEnd: number): boolean;
}
