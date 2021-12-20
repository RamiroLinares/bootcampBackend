import express from 'express';
import { Schema, model, connect } from 'mongoose';
import { BookSchema } from './External/Infrastructure/dataAccess/BookSchema';
import {run} from './External/Infrastructure/dataAccess/bookDataAccess'
import { Board } from './Core/models/Board';
/* const app= express()
const port=3000;
app.get('/',async(req,res)=>{
    const BookModel = model<any>('Book', BookSchema);
    const str=await run(BookModel).catch(err => console.log(err));
    console.log(str);
    res.send(str)
})

app.listen(port, () =>{
    console.log(`Server is listening on ${port}`)
})
 */

const board= new Board()
for (let i = 0; i <= 7; i++) {
    for (let j = 0; j <= 7; j++) {
    const color=board.squares[i][j].getPiece()?? 'empty'
    console.log(color)
    }
}
