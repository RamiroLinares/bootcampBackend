import { Schema } from "mongoose";
import { Board } from '../../../Core/models/Board';


export const ChessSchemaHistory= new Schema<any>({
    chessHistory:{type: String},
})

export const ChessSchemaBoard= new Schema<any>({
    chessBoard:{type: Object}
})


