import { Board } from '../../Core/models/Board';
import { Square } from '../../Core/models/Square';
import { Pawn } from '../../Core/models/Pieces/Pawn';
import { Rook } from '../../Core/models/Pieces/Rook';
describe('Pawn', () => {
    const board = new Board();
    beforeEach(() => {
        board.emptyBoard()
    })
    it('Pawn Initializing in initial position', () => {
        board.resetBoard()
        const squarePawn = new Square(1, 0, new Pawn(true));
        expect(board.squares[1][0]).toEqual(squarePawn);
    });
    it('Is White Pawn moving correctly in Y axis?', () => {
        const squarePawn = new Square(1, 1, new Pawn(true));
        board.squares[1][1] = squarePawn;
        const start = squarePawn;
        const end = board.squares[2][1];

        squarePawn.getPiece().canMove(board, start, end)
        expect(end.getPiece().constructor.name).toEqual('Pawn');
    });
    it('Can White Pawn move in X axis?', () => {
        const squarePawn = new Square(3, 3, new Pawn(true));
        board.squares[3][3] = squarePawn;
        const start = squarePawn;
        const end = board.squares[3][4];

        squarePawn.getPiece().canMove(board, start, end)
        expect(end.getPiece()).toEqual(null);
    });
    it('Is Black Pawn moving correctly in -Y axis?', () => {
        const squarePawn = new Square(3, 3, new Pawn(false));
        board.squares[2][3] = squarePawn;
        const start = squarePawn;
        const end = board.squares[2][3];

        squarePawn.getPiece().canMove(board, start, end)
        expect(end.getPiece().constructor.name).toEqual('Pawn');
    });
    it('Can Black Pawn move in -X axis?', () => {
        const squarePawn = new Square(3, 3, new Pawn(false));
        board.squares[3][3] = squarePawn;
        const start = squarePawn;
        const end = board.squares[3][2];

        squarePawn.getPiece().canMove(board, start, end)
        expect(end.getPiece()).toEqual(null);
    });
    it('Can Pawn Kill an Enemy Piece in diagonal (Pawn eg)?', () => {
        const squarePawn = new Square(0, 0, new Pawn(true));
        const squarePawn2 = new Square(1, 1, new Pawn(false))
        board.squares[0][0] = squarePawn;
        board.squares[1][1] = squarePawn2;
        const start = squarePawn;
        const end = board.squares[1][1];

        squarePawn.getPiece().canMove(board, start, end)
        expect(end.getPiece().isWhite()).toEqual(true);
    });
    it('Can Pawn Kill an Aly Piece (Pawn eg, pass if cant kill it)?', () => {
        const squarePawn = new Square(0, 0, new Pawn(true));
        const squarePawn2 = new Square(1, 1, new Rook(true))
        board.squares[0][0] = squarePawn;
        board.squares[1][1] = squarePawn2;
        const start = squarePawn;
        const end = board.squares[1][1];

        squarePawn.getPiece().canMove(board, start, end)
        expect(end.getPiece().constructor.name).toEqual('Rook');
    });
    it('Can Pawn move two square at fist and then only one?', () => {
        const squarePawn = new Square(1, 1, new Pawn(true));
        board.squares[1][1] = squarePawn;
        const start = squarePawn;
        const end = board.squares[3][1];

        squarePawn.getPiece().canMove(board, start, end)
        expect(end.getPiece().constructor.name).toEqual('Pawn');
        const end2 = board.squares[5][1];
        end.getPiece().canMove(board, end, end2)
        expect(end2.getPiece()).toEqual(null);
    });
});