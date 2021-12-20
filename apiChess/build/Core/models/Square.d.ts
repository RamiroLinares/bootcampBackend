import { Piece } from "./Piece";
export declare class Square {
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
