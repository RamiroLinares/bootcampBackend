import { Piece } from "../Piece";

export class Bishop extends Piece {
    constructor(white: boolean) {
        super(white);
    }
    isValidMoveForThisPiece(xStartToEnd: number, yStartToEnd: number) {
        if(xStartToEnd===yStartToEnd){
            return true;
        }else{
            return false;
        }
    }
}