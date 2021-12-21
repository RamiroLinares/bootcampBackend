import { Board } from '../../Core/models/Board';
import { King } from '../../Core/models/Pieces/King';
import { Square } from '../../Core/models/Square';
describe('Board', () => {
    it('Board Initializing', () => {
        const board = new Board();
        const squareKing = new Square(0, 3, new King(true));
        expect(board.squares[0][3]).toEqual(squareKing);
    });
});