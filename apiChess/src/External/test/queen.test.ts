import { Board } from '../../Core/models/Board';
import { Square } from '../../Core/models/Square';
import { Queen } from '../../Core/models/Pieces/Queen';
import { Pawn } from '../../Core/models/Pieces/Pawn';
describe('Queen', () => {
    it('Queen Initializing', () => {
        const board = new Board();
        const squareQueen = new Square(0, 4, new Queen(true));
        expect(board.squares[0][4]).toEqual(squareQueen);
    });

    it('Is White Queen moving correctly in +X +Y axis?', () => {
        const board = new Board();
        board.emptyBoard()

        const squareQueen = new Square(3, 3, new Queen(true));
        board.squares[3][3] = squareQueen;
        const start = squareQueen;
        const end = board.squares[7][7];

        squareQueen.getPiece().canMove(board, start, end)
        expect(end.getPiece().constructor.name).toEqual('Queen');
    });
    it('Is White Queen moving correctly in -X +Y axis?', () => {
        const board = new Board();
        board.emptyBoard()

        const squareQueen = new Square(3, 3, new Queen(true));
        board.squares[3][3] = squareQueen;
        const start = squareQueen;
        const end = board.squares[0][6];

        squareQueen.getPiece().canMove(board, start, end)
        expect(end.getPiece().constructor.name).toEqual('Queen');
    });
    it('Is Black Queen moving correctly in -X -Y axis?', () => {
        const board = new Board();
        board.emptyBoard()

        const squareQueen = new Square(3, 3, new Queen(false));
        board.squares[3][3] = squareQueen;
        const start = squareQueen;
        const end = board.squares[0][0];

        squareQueen.getPiece().canMove(board, start, end)
        expect(end.getPiece().constructor.name).toEqual('Queen');
    });
    it('Is Black Queen moving correctly in +X -Y axis?', () => {
        const board = new Board();
        board.emptyBoard()

        const squareQueen = new Square(3, 3, new Queen(false));
        board.squares[3][3] = squareQueen;
        const start = squareQueen;
        const end = board.squares[6][0];

        squareQueen.getPiece().canMove(board, start, end)
        expect(end.getPiece().constructor.name).toEqual('Queen');
    });
    it('Can Queen Kill an Enemy Piece (Pawn eg)?', () => {
        const board = new Board();
        board.emptyBoard()

        const squareQueen = new Square(3, 3, new Queen(true));
        const squarePawn= new Square(4, 4, new Pawn(false))
        board.squares[3][3] = squareQueen;
        board.squares[4][4]=squarePawn;
        const start = squareQueen;
        const end = board.squares[4][4];

        squareQueen.getPiece().canMove(board, start, end)
        expect(end.getPiece().constructor.name).toEqual('Queen');
    });
    it('Can Queen Kill an Aly Piece (Pawn eg, pass if cant kill it)?', () => {
        const board = new Board();
        board.emptyBoard()

        const squareQueen = new Square(3, 3, new Queen(true));
        const squarePawn= new Square(4, 4, new Pawn(true))
        board.squares[3][3] = squareQueen;
        board.squares[4][4]=squarePawn;
        const start = squareQueen;
        const end = board.squares[4][4];

        squareQueen.getPiece().canMove(board, start, end)
        expect(end.getPiece().constructor.name).toEqual('Pawn');
    });
    it('Can Queen Jump a Piece ?', () => {
        const board = new Board();
        board.emptyBoard()

        const squareQueen = new Square(3, 3, new Queen(true));
        const squarePawn= new Square(4, 4, new Pawn(true))
        board.squares[3][3] = squareQueen;
        board.squares[4][4]=squarePawn;
        const start = squareQueen;
        const end = board.squares[5][5];

        squareQueen.getPiece().canMove(board, start, end)
        expect(end.getPiece()).toEqual(null);
    });
    it('Is White Queen moving correctly in Y axis?', () => {
        const board = new Board();
        board.emptyBoard()

        const squareQueen = new Square(0, 0, new Queen(true));
        board.squares[0][0] = squareQueen;
        const start = squareQueen;
        const end = board.squares[0][7];

        squareQueen.getPiece().canMove(board, start, end)
        expect(end.getPiece().constructor.name).toEqual('Queen');
    });
    it('Is White Queen moving correctly in X axis?', () => {
        const board = new Board();
        board.emptyBoard()

        const squareQueen = new Square(0, 0, new Queen(true));
        board.squares[0][0] = squareQueen;
        const start = squareQueen;
        const end = board.squares[7][0];

        squareQueen.getPiece().canMove(board, start, end)
        expect(end.getPiece().constructor.name).toEqual('Queen');
    });
    it('Is Black Queen moving correctly in -Y axis?', () => {
        const board = new Board();
        board.emptyBoard()

        const squareQueen = new Square(0, 7, new Queen(false));
        board.squares[0][7] = squareQueen;
        const start = squareQueen;
        const end = board.squares[0][0];

        squareQueen.getPiece().canMove(board, start, end)
        expect(end.getPiece().constructor.name).toEqual('Queen');
    });
    it('Is Black Queen moving correctly in -X axis?', () => {
        const board = new Board();
        board.emptyBoard()

        const squareQueen = new Square(7, 0, new Queen(false));
        board.squares[7][0] = squareQueen;
        const start = squareQueen;
        const end = board.squares[0][0];

        squareQueen.getPiece().canMove(board, start, end)
        expect(end.getPiece().constructor.name).toEqual('Queen');
    });
});