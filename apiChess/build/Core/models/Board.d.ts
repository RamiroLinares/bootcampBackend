import { ISquare } from './ISquare';
export declare class Board {
    squares: ISquare[][];
    constructor();
    getBox(x: number, y: number): ISquare;
    resetBoard(): void;
}
