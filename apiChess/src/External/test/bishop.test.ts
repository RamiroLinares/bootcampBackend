import { Board } from '../../Core/models/Board';
import { Square } from '../../Core/models/Square';
import { Bishop } from '../../Core/models/Pieces/Bishop';
import { Pawn } from '../../Core/models/Pieces/Pawn';
describe('Bishop', () => {
    it('Bishop Initializing', () => {
        const board = new Board();
        const squareBishop = new Square(0, 0, new Bishop(true));
        expect(board.squares[0][0]).toEqual(squareBishop);
    });
    it('Is White Bishop moving correctly in +X +Y axis?', () => {
        const board = new Board();
        board.emptyBoard()

        const squareBishop = new Square(3, 3, new Bishop(true));
        board.squares[3][3] = squareBishop;
        const start = squareBishop;
        const end = board.squares[7][7];

        squareBishop.getPiece().canMove(board, start, end)
        expect(end.getPiece().constructor.name).toEqual('Bishop');
    });
    it('Is White Bishop moving correctly in -X +Y axis?', () => {
        const board = new Board();
        board.emptyBoard()

        const squareBishop = new Square(3, 3, new Bishop(true));
        board.squares[3][3] = squareBishop;
        const start = squareBishop;
        const end = board.squares[0][6];

        squareBishop.getPiece().canMove(board, start, end)
        expect(end.getPiece().constructor.name).toEqual('Bishop');
    });
    it('Is Black Bishop moving correctly in -X -Y axis?', () => {
        const board = new Board();
        board.emptyBoard()

        const squareBishop = new Square(3, 3, new Bishop(false));
        board.squares[3][3] = squareBishop;
        const start = squareBishop;
        const end = board.squares[0][0];

        squareBishop.getPiece().canMove(board, start, end)
        expect(end.getPiece().constructor.name).toEqual('Bishop');
    });
    it('Is Black Bishop moving correctly in +X -Y axis?', () => {
        const board = new Board();
        board.emptyBoard()

        const squareBishop = new Square(3, 3, new Bishop(false));
        board.squares[3][3] = squareBishop;
        const start = squareBishop;
        const end = board.squares[6][0];

        squareBishop.getPiece().canMove(board, start, end)
        expect(end.getPiece().constructor.name).toEqual('Bishop');
    });
    it('Can Bishop Kill an Enemy Piece (Pawn eg)?', () => {
        const board = new Board();
        board.emptyBoard()

        const squareBishop = new Square(3, 3, new Bishop(true));
        const squarePawn= new Square(4, 4, new Pawn(false))
        board.squares[3][3] = squareBishop;
        board.squares[4][4]=squarePawn;
        const start = squareBishop;
        const end = board.squares[4][4];

        squareBishop.getPiece().canMove(board, start, end)
        expect(end.getPiece().constructor.name).toEqual('Bishop');
    });
    it('Can Bishop Kill an Aly Piece (Pawn eg, pass if cant kill it)?', () => {
        const board = new Board();
        board.emptyBoard()

        const squareBishop = new Square(3, 3, new Bishop(true));
        const squarePawn= new Square(4, 4, new Pawn(true))
        board.squares[3][3] = squareBishop;
        board.squares[4][4]=squarePawn;
        const start = squareBishop;
        const end = board.squares[4][4];

        squareBishop.getPiece().canMove(board, start, end)
        expect(end.getPiece().constructor.name).toEqual('Pawn');
    });
    it('Can Bishop Jump a Piece ?', () => {
        const board = new Board();
        board.emptyBoard()

        const squareBishop = new Square(3, 3, new Bishop(true));
        const squarePawn= new Square(4, 4, new Pawn(true))
        board.squares[3][3] = squareBishop;
        board.squares[4][4]=squarePawn;
        const start = squareBishop;
        const end = board.squares[5][5];

        squareBishop.getPiece().canMove(board, start, end)
        expect(end.getPiece()).toEqual(null);
    });
    
});