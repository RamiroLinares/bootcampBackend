import express from 'express';
import { Board } from './Core/models/Board';
import { Player } from './Core/models/Player';
import {saveMatchToDB, loadMatchFromDB} from './Core/services/boardToDb'
import { boardTurns } from './Core/services/boardTurns';

const app = express()
const port = 3000;
let board = new Board()
let player = new Player();

app.get('/', async (req, res) => {
    res.send("/initGame for initialize, /game/:movement for move piece, /saveMatch to save, /loadMatch to load")
})
app.get('/initGame', (req, res) => {
    board.resetBoard();
    res.send("board reseted")
})
app.get('/saveMatch', async (req, res) => {
    await saveMatchToDB(board);
    res.send("match saved")
});

app.get('/loadMatch', async (req, res) => {
    board.squares = await loadMatchFromDB(board);
    res.send("last match loaded")
});

app.get('/game/:movement', async (req, res) => {
    const movement = req.params.movement;
    res.send(boardTurns(board,player,movement));

});
app.listen(port, () => {
    console.log(`Server is listening on ${port}`)
})


