import express from 'express';
import { model } from 'mongoose';
import { ChessSchemaHistory, ChessSchemaBoard } from './External/Infrastructure/dataAccess/ChessSchema';
import { saveMatch, saveMovement, loadMatch } from './External/Infrastructure/dataAccess/ChessDataAccess'
import { Board } from './Core/models/Board';
import { Square } from './Core/models/Square';
import { Player } from './Core/models/Player';

const app = express()
const port = 3000;
let board = new Board()
let player= new Player();
function isLetter(letter: string) {
    return (letter.toUpperCase() != letter.toLowerCase());
}
app.get('/', async (req, res) => {
    res.send("/initGame for initialize, /game/:movement for move piece, /saveMatch to save, /loadMatch to load")
})
app.get('/initGame', (req, res) => {
    board.resetBoard();
    res.send("board reseted")
})
app.get('/saveMatch', async (req, res) => {
    const ChessModel = model<any>('ChessBoard', ChessSchemaBoard);
    await saveMatch(ChessModel, board).catch(err => console.log(err));
    res.send("match saved")
});

app.get('/loadMatch', async (req, res) => {
    const ChessModel = model<any>('ChessBoard', ChessSchemaBoard);
    console.log(board.squares);
    const boardAux=await loadMatch(ChessModel, board)//.catch(err => console.log(err));
    console.log(boardAux);
    /* console.log(boardAux[0].chessBoard); */
    board.squares=boardAux as Array<Array<Square>>;
    console.log(board.squares);
    res.send("last match loaded")
});

app.get('/game/:movement', async (req, res) => {

    const movement = req.params.movement;
    const movements = [];
    for (let i = 0; i < movement.length; i++) {
        if (isLetter(movement.charAt(i))) {
            movements.push(movement.charCodeAt(i) - 97);
        } else {
            movements.push(Number(movement.charAt(i)) - 1)
        }
    }
    const posInitialLetter = movements[0];
    const posInitialNumber = movements[1];

    const posEndLetter = movements[2];
    const posEndNumber = movements[3];

    const initBoardSquare = board.squares[posInitialNumber][posInitialLetter];
    const endBoardSquare = board.squares[posEndNumber][posEndLetter];

    if(initBoardSquare.getPiece()?.isWhite()===player.isWhiteTurn()){
    if (initBoardSquare.getPiece()?.canMove(initBoardSquare, endBoardSquare)) {
        res.send("movement is " + req.params.movement + " is valid");
        player.togglePlayer();

        const ChessModel = model<any>('Chess', ChessSchemaHistory);
        await saveMovement(ChessModel, movement).catch(err => console.log(err));

    } else {
        res.send("movement is " + req.params.movement + " is NOT valid");
    }
}else{
    res.send("movement " + req.params.movement + " is NOT the correct color piece turn");
}
});
app.listen(port, () => {
    console.log(`Server is listening on ${port}`)
})


