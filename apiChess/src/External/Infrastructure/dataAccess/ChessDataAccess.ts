import { connect, disconnect } from 'mongoose';
import { IBoard } from '../../../Core/models/IBoard';

export async function saveMovement(ChessModel: any, chessHistory: string): Promise<void> {
  await connect('mongodb://localhost:27017/chess');

  const doc = new ChessModel({
    chessHistory: chessHistory
  });
  await doc.save();
  console.log(doc);
  disconnect();
  return doc.chessHistory;
}

export async function saveMatch(ChessModel: any, chessBoard: IBoard): Promise<void> {
  await connect('mongodb://localhost:27017/chess');

  const doc = new ChessModel({
    chessBoard: chessBoard
  });
  await doc.save();
  disconnect();
  return doc.chessBoard;
}

export async function loadMatch(ChessModel: any, chessBoard: IBoard): Promise<IBoard> {
  await connect('mongodb://localhost:27017/chess');
  
/*   const doc = await (ChessModel.find().sort({ _id: -1 }).limit(1).then((products:any) => {
    console.log(products)
}))
  disconnect(); */
  return await (ChessModel.find().sort({ _id: -1 }).limit(1));
}
