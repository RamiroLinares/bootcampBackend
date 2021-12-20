import express from 'express';
import { Schema, model, connect } from 'mongoose';
import { BookSchema } from './External/Infrastructure/dataAccess/BookSchema';
import {run} from './External/Infrastructure/dataAccess/bookDataAccess'
import { Board } from './Core/models/Board';
const app= express()
const port=3000;
const board= new Board()
function isLetter(letter:string) {
    return (letter.toUpperCase() != letter.toLowerCase());
  }
app.get('/',async(req,res)=>{
    const BookModel = model<any>('Book', BookSchema);
    const str=await run(BookModel).catch(err => console.log(err));
    console.log(str);
    res.send(str)
})
app.get('/initGame',(req,res)=>{
    board.resetBoard();
    res.send("board reseted")
})
app.get('/game/:movement', function(req, res) {
    
    const movement=req.params.movement;
    const movements=[];
    for (let i = 0; i < movement.length; i++) {
        if(isLetter(movement.charAt(i))){
            movements.push(movement.charCodeAt(i)-97);
        }else{
            movements.push(Number(movement.charAt(i))-1)
        }
    }
    const posInitialLetter=movements[0];
    const posInitialNumber=movements[1];
    
    const posEndLetter=movements[2];
    const posEndNumber=movements[3];
    
    const initBoardSquare=board.squares[posInitialNumber][posInitialLetter];
    const endBoardSquare=board.squares[posEndNumber][posEndLetter];
    
    if(initBoardSquare.getPiece()?.canMove(initBoardSquare,endBoardSquare)){
        res.send("movement is " + req.params.movement+ " is valid");
    }else{
        res.send("movement is " + req.params.movement+ " is NOT valid");
    }
  });
app.listen(port, () =>{
    console.log(`Server is listening on ${port}`)
})
 

