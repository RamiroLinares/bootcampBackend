import { Piece } from "../Piece";
export class King extends Piece {
    constructor(white: boolean) {
        super(white);
    }

    isValidMoveForThisPiece(xStartToEnd:number,yStartToEnd:number) { 
         if (xStartToEnd + yStartToEnd == 1) {
            // check if this move will not result in the king being attacked if so return true
            return true;
        }else{
            return false;
        }
    }
}