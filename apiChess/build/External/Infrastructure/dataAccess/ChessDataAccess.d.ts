import { Board } from '../../../Core/models/Board';
export declare function saveMovement(ChessModel: any, chessHistory: string): Promise<void>;
export declare function saveMatch(ChessModel: any, chessBoard: Board): Promise<void>;
export declare function loadMatch(ChessModel: any, chessBoard: Board): Promise<Board>;
