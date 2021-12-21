import { Board } from '../../Core/models/Board';
import { Square } from '../../Core/models/Square';
import { King } from '../../Core/models/Pieces/King';
import { Pawn } from '../../Core/models/Pieces/Pawn';
describe('King', () => {
    const board = new Board();
    beforeEach(() => {
        board.emptyBoard()
    })

    it('King Initializing in inital position', () => {
        board.resetBoard();
        const squareKing = new Square(0, 3, new King(true));
        expect(board.squares[0][3]).toEqual(squareKing);
    });

    it('Is White King moving correctly in +X +Y axis?', () => {
        const squareKing = new Square(3, 3, new King(true));
        board.squares[3][3] = squareKing;
        const start = squareKing;
        const end = board.squares[4][4];

        squareKing.getPiece().canMove(board, start, end)
        expect(end.getPiece().constructor.name).toEqual('King');
    });
    it('Is White King moving correctly in -X +Y axis?', () => {
        const squareKing = new Square(3, 3, new King(true));
        board.squares[3][3] = squareKing;
        const start = squareKing;
        const end = board.squares[2][3];

        squareKing.getPiece().canMove(board, start, end)
        expect(end.getPiece().constructor.name).toEqual('King');
    });
    it('Is Black King moving correctly in -X -Y axis?', () => {
        const squareKing = new Square(3, 3, new King(false));
        board.squares[3][3] = squareKing;
        const start = squareKing;
        const end = board.squares[2][2];

        squareKing.getPiece().canMove(board, start, end)
        expect(end.getPiece().constructor.name).toEqual('King');
    });
    it('Is Black King moving correctly in +X -Y axis?', () => {
        const squareKing = new Square(3, 3, new King(false));
        board.squares[3][3] = squareKing;
        const start = squareKing;
        const end = board.squares[3][2];

        squareKing.getPiece().canMove(board, start, end)
        expect(end.getPiece().constructor.name).toEqual('King');
    });
    it('Can King Kill an Enemy Piece (Pawn eg)?', () => {
        const squareKing = new Square(3, 3, new King(true));
        const squarePawn = new Square(4, 4, new Pawn(false))
        board.squares[3][3] = squareKing;
        board.squares[4][4] = squarePawn;
        const start = squareKing;
        const end = board.squares[4][4];

        squareKing.getPiece().canMove(board, start, end)
        expect(end.getPiece().constructor.name).toEqual('King');
    });
    it('Can King Kill an Aly Piece (Pawn eg, pass if cant kill it)?', () => {
        const squareKing = new Square(3, 3, new King(true));
        const squarePawn = new Square(4, 4, new Pawn(true))
        board.squares[3][3] = squareKing;
        board.squares[4][4] = squarePawn;
        const start = squareKing;
        const end = board.squares[4][4];

        squareKing.getPiece().canMove(board, start, end)
        expect(end.getPiece().constructor.name).toEqual('Pawn');
    });
    it('Is White King moving correctly in Y axis?', () => {
        const squareKing = new Square(3, 3, new King(true));
        board.squares[3][3] = squareKing;
        const start = squareKing;
        const end = board.squares[3][4];

        squareKing.getPiece().canMove(board, start, end)
        expect(end.getPiece().constructor.name).toEqual('King');
    });
    it('Is White King moving correctly in X axis?', () => {
        const squareKing = new Square(3, 3, new King(true));
        board.squares[3][3] = squareKing;
        const start = squareKing;
        const end = board.squares[4][3];

        squareKing.getPiece().canMove(board, start, end)
        expect(end.getPiece().constructor.name).toEqual('King');
    });
    it('Is Black King moving correctly in -Y axis?', () => {
        const squareKing = new Square(3, 3, new King(false));
        board.squares[3][3] = squareKing;
        const start = squareKing;
        const end = board.squares[3][2];

        squareKing.getPiece().canMove(board, start, end)
        expect(end.getPiece().constructor.name).toEqual('King');
    });
    it('Is Black King moving correctly in -X axis?', () => {
        const squareKing = new Square(3, 3, new King(false));
        board.squares[3][3] = squareKing;
        const start = squareKing;
        const end = board.squares[2][3];

        squareKing.getPiece().canMove(board, start, end)
        expect(end.getPiece().constructor.name).toEqual('King');
    });
    it('Can King only move one straightforward?', () => {
        const squareKing = new Square(3, 3, new King(true));
        board.squares[3][3] = squareKing;
        const start = squareKing;
        const end = board.squares[3][5];

        squareKing.getPiece().canMove(board, start, end)
        expect(end.getPiece()).toEqual(null);
    });
});