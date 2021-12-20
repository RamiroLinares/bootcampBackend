import { ISquare } from './ISquare';
import { IBoard } from './IBoard';
export declare class Board implements IBoard {
    squares: ISquare[][];
    constructor();
    getBox(x: number, y: number): any;
    resetBoard(): void;
}
