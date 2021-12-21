import { Board } from '../models/Board';
import { ChessSchemaHistory, ChessSchemaBoard } from '../../External/Infrastructure/dataAccess/ChessSchema';
import { model } from 'mongoose';
import { saveMatch, saveMovement, loadMatch } from '../../External/Infrastructure/dataAccess/ChessDataAccess'
import { Square } from '../models/Square';

export async function saveMatchToDB(board: Board) {
    const ChessModel = model<any>('ChessBoard', ChessSchemaBoard);
    await saveMatch(ChessModel, board).catch(err => console.log(err));
}

export async function loadMatchFromDB(board: Board) {
    const ChessModel = model<any>('ChessBoard', ChessSchemaBoard);
    const boardAux = await loadMatch(ChessModel, board)
    return boardAux as Array<Array<Square>>;
}

export async function saveMovementToDB(movement: any) {
    const ChessModel = model<any>('Chess', ChessSchemaHistory);
    await saveMovement(ChessModel, movement).catch(err => console.log(err));
}