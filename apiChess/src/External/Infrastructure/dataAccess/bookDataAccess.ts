import { BookSchema } from '../../../Core/models/Book';
import { Schema, model, connect } from 'mongoose';


export async function run(BookModel:any): Promise<void> {
  // 4. Connect to MongoDB
  await connect('mongodb://localhost:27017/books');

  const doc = new BookModel({
    author:'adsa',
    title:'elPEpe',
    //date: Date.now,
    year:2021
  });
  await doc.save();

  return doc.author; 
}
