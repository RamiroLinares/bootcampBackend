import { Board } from '../../Core/models/Board';
import { Square } from '../../Core/models/Square';
import { Knight } from '../../Core/models/Pieces/Knight';
import { Pawn } from '../../Core/models/Pieces/Pawn';
describe('Knight', () => {
    const board = new Board();
    beforeEach(() => {
        board.emptyBoard()
    })

    it('Knight Initializing in initial position', () => {
        board.resetBoard()
        const squareKnight = new Square(0, 1, new Knight(true));
        expect(board.squares[0][1]).toEqual(squareKnight);
    });
    it('Is White Knight moving correctly in up Right?', () => {
        const squareKnight = new Square(0, 0, new Knight(true));
        board.squares[0][0] = squareKnight;
        const start = squareKnight;
        const end = board.squares[1][2];

        squareKnight.getPiece().canMove(board, start, end)
        expect(end.getPiece().constructor.name).toEqual('Knight');
    });
    it('Is White Knight moving correctly in Up Left?', () => {
        const squareKnight = new Square(0, 0, new Knight(true));
        board.squares[0][0] = squareKnight;
        const start = squareKnight;
        const end = board.squares[2][1];

        squareKnight.getPiece().canMove(board, start, end)
        expect(end.getPiece().constructor.name).toEqual('Knight');
    });
    it('Is Black Knight moving correctly in down right?', () => {
        const squareKnight = new Square(0, 7, new Knight(false));
        board.squares[0][7] = squareKnight;
        const start = squareKnight;
        const end = board.squares[1][5];

        squareKnight.getPiece().canMove(board, start, end)
        expect(end.getPiece().constructor.name).toEqual('Knight');
    });
    it('Is Black Knight moving correctly in Down Left?', () => {
        const squareKnight = new Square(7, 7, new Knight(false));
        board.squares[7][7] = squareKnight;
        const start = squareKnight;
        const end = board.squares[6][5];

        squareKnight.getPiece().canMove(board, start, end)
        expect(end.getPiece().constructor.name).toEqual('Knight');
    });
    it('Can Knight Kill an Enemy Piece (Pawn eg)?', () => {
        const squareKnight = new Square(0, 0, new Knight(true));
        const squarePawn = new Square(1, 2, new Pawn(false))
        board.squares[0][0] = squareKnight;
        board.squares[1][2] = squarePawn;
        const start = squareKnight;
        const end = board.squares[1][2];

        squareKnight.getPiece().canMove(board, start, end)
        expect(end.getPiece().constructor.name).toEqual('Knight');
    });
    it('Can Knight Kill an Aly Piece (Pawn eg, pass if cant kill it)?', () => {
        const squareKnight = new Square(0, 0, new Knight(true));
        const squarePawn = new Square(1, 2, new Pawn(true))
        board.squares[0][0] = squareKnight;
        board.squares[1][2] = squarePawn;
        const start = squareKnight;
        const end = board.squares[1][2];

        squareKnight.getPiece().canMove(board, start, end)
        expect(end.getPiece().constructor.name).toEqual('Pawn');
    });
    it('Can Knight Jump a Piece (pass if correct)?', () => {
        const squareKnight = new Square(0, 0, new Knight(true));
        const squarePawn = new Square(0, 1, new Pawn(true))
        board.squares[0][0] = squareKnight;
        board.squares[0][1] = squarePawn;
        const start = squareKnight;
        const end = board.squares[1][2];

        squareKnight.getPiece().canMove(board, start, end)
        expect(end.getPiece().constructor.name).toEqual('Knight');
    });

});