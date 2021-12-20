import { Schema, model, connect } from 'mongoose';
import { BookSchema } from './BookSchema';


export async function run(BookModel:any): Promise<void> {
  // 4. Connect to MongoDB
  await connect('mongodb://localhost:27017/books');

  const doc = new BookModel({
    author:'un autor',
    title:'Un titulo',
    //date: Date.now,
    year:2021
  });
  //await doc.save();
  console.log(doc);
  return doc.author; 
}
