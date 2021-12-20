import { IPiece } from "./IPiece";

export interface ISquare {
    getPiece():IPiece;
    setPiece(p:IPiece):void;
    getX():number;
    setX(x:number):void;
    getY():number;
    setY(y:number):void;
}