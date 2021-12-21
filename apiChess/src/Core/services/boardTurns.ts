import { Board } from "../models/Board";
import { Player } from '../models/Player';
import { saveMovementToDB } from "./boardToDb";
import { deserializeQueryMovement } from "./queryDeserialize";

export function boardTurns(board: Board, player: Player, movement: any): string {
    const movements = deserializeQueryMovement(movement);
    const posInitialLetter = movements[0];
    const posInitialNumber = movements[1];
    const posEndLetter = movements[2];
    const posEndNumber = movements[3];

    const initBoardSquare = board.squares[posInitialNumber][posInitialLetter];
    const endBoardSquare = board.squares[posEndNumber][posEndLetter];

    let result: string = '';
    if (initBoardSquare.getPiece()?.isWhite() === player.isWhiteTurn()) {
        if (initBoardSquare.getPiece()?.canMove(board, initBoardSquare, endBoardSquare)) {
            result = "movement is " + movement + " is valid";
            player.togglePlayer();
            saveMovementToDB(movement);
        } else {
            result = "movement is " + movement + " is NOT valid";
        }
    } else {
        result = "movement " + movement + " is NOT the correct color piece turn";
    }
    return result;
}