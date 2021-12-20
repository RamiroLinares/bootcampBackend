import { Piece } from "./Piece";
import { ISquare } from './ISquare';
export declare class Square implements ISquare {
    private piece;
    private x;
    private y;
    constructor(x: number, y: number, piece: Piece);
    getPiece(): Piece;
    setPiece(p: Piece): void;
    getX(): number;
    setX(x: number): void;
    getY(): number;
    setY(y: number): void;
}
