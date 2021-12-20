import { connect, disconnect } from 'mongoose';


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
