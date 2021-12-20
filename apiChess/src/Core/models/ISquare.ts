import { Piece } from "./Piece";

export interface ISquare {
    getPiece():Piece;
    setPiece(p:Piece):void;
    getX():number;
    setX(x:number):void;
    getY():number;
    setY(y:number):void;
}