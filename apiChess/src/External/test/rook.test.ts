import { Board } from '../../Core/models/Board';
import { Square } from '../../Core/models/Square';
import { Rook } from '../../Core/models/Pieces/Rook';
import { Pawn } from '../../Core/models/Pieces/Pawn';
describe('Rook', () => {
    it('Rook Initializing', () => {
        const board = new Board();
        const squareRook = new Square(0, 0, new Rook(true));
        expect(board.squares[0][0]).toEqual(squareRook);
    });
    it('Is White Rook moving correctly in Y axis?', () => {
        const board = new Board();
        board.emptyBoard()

        const squareRook = new Square(0, 0, new Rook(true));
        board.squares[0][0] = squareRook;
        const start = squareRook;
        const end = board.squares[0][7];

        squareRook.getPiece().canMove(board, start, end)
        expect(end.getPiece().constructor.name).toEqual('Rook');
    });
    it('Is White Rook moving correctly in X axis?', () => {
        const board = new Board();
        board.emptyBoard()

        const squareRook = new Square(0, 0, new Rook(true));
        board.squares[0][0] = squareRook;
        const start = squareRook;
        const end = board.squares[7][0];

        squareRook.getPiece().canMove(board, start, end)
        expect(end.getPiece().constructor.name).toEqual('Rook');
    });
    it('Is Black Rook moving correctly in -Y axis?', () => {
        const board = new Board();
        board.emptyBoard()

        const squareRook = new Square(0, 7, new Rook(false));
        board.squares[0][7] = squareRook;
        const start = squareRook;
        const end = board.squares[0][0];

        squareRook.getPiece().canMove(board, start, end)
        expect(end.getPiece().constructor.name).toEqual('Rook');
    });
    it('Is Black Rook moving correctly in -X axis?', () => {
        const board = new Board();
        board.emptyBoard()

        const squareRook = new Square(7, 0, new Rook(false));
        board.squares[7][0] = squareRook;
        const start = squareRook;
        const end = board.squares[0][0];

        squareRook.getPiece().canMove(board, start, end)
        expect(end.getPiece().constructor.name).toEqual('Rook');
    });
    it('Can Rook Kill an Enemy Piece (Pawn eg)?', () => {
        const board = new Board();
        board.emptyBoard()

        const squareRook = new Square(0, 0, new Rook(true));
        const squarePawn= new Square(0, 7, new Pawn(false))
        board.squares[0][0] = squareRook;
        board.squares[0][7]=squarePawn;
        const start = squareRook;
        const end = board.squares[0][7];

        squareRook.getPiece().canMove(board, start, end)
        expect(end.getPiece().constructor.name).toEqual('Rook');
    });
    it('Can Rook Kill an Aly Piece (Pawn eg, pass if cant kill it)?', () => {
        const board = new Board();
        board.emptyBoard()

        const squareRook = new Square(0, 0, new Rook(true));
        const squarePawn= new Square(0, 7, new Pawn(true))
        board.squares[0][0] = squareRook;
        board.squares[0][7]=squarePawn;
        const start = squareRook;
        const end = board.squares[0][7];

        squareRook.getPiece().canMove(board, start, end)
        expect(end.getPiece().constructor.name).toEqual('Pawn');
    });
    it('Can Rook Jump a Piece ?', () => {
        const board = new Board();
        board.emptyBoard()

        const squareRook = new Square(0, 0, new Rook(true));
        const squarePawn= new Square(0, 1, new Pawn(true))
        board.squares[0][0] = squareRook;
        board.squares[0][1]=squarePawn;
        const start = squareRook;
        const end = board.squares[0][2];

        squareRook.getPiece().canMove(board, start, end)
        expect(end.getPiece()).toEqual(null);
    });
    
});