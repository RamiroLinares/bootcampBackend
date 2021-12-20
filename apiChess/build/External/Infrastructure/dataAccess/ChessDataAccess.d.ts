import { IBoard } from '../../../Core/models/IBoard';
export declare function saveMovement(ChessModel: any, chessHistory: string): Promise<void>;
export declare function saveMatch(ChessModel: any, chessBoard: IBoard): Promise<void>;
export declare function loadMatch(ChessModel: any, chessBoard: IBoard): Promise<IBoard>;
