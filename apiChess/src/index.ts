import express from 'express';
import { Schema, model, connect } from 'mongoose';
import { BookSchema } from './External/Infrastructure/dataAccess/BookSchema';
import {run} from './External/Infrastructure/dataAccess/bookDataAccess'
import { Board } from './Core/models/Board';
const app= express()
const port=3000;
const board= new Board()
app.get('/',async(req,res)=>{
    const BookModel = model<any>('Book', BookSchema);
    const str=await run(BookModel).catch(err => console.log(err));
    console.log(str);
    res.send(str)
})
app.get('/initGame',(req,res)=>{
    board.resetBoard();
})

app.listen(port, () =>{
    console.log(`Server is listening on ${port}`)
})
 


for (let i = 0; i <= 7; i++) {
    for (let j = 0; j <= 7; j++) {
    const color=board.squares[i][j].getPiece()?? 'empty'
    console.log(color)
    }
}
console.log(board.squares[1][1].getPiece().canMove(board.squares[1][1],board.squares[2][1]))
