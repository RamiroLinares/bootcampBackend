import { IPiece } from "./IPiece";
import { ISquare } from './ISquare';
export declare class Square implements ISquare {
    private piece;
    private x;
    private y;
    constructor(x: number, y: number, piece: IPiece);
    getPiece(): IPiece;
    setPiece(p: IPiece): void;
    getX(): number;
    setX(x: number): void;
    getY(): number;
    setY(y: number): void;
}
