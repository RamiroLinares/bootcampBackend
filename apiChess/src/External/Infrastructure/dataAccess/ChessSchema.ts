import { Schema } from "mongoose";


export const ChessSchemaHistory = new Schema<any>({
    chessHistory: { type: String },
})

export const ChessSchemaBoard = new Schema<any>({
    chessBoard: { type: Object }
})


