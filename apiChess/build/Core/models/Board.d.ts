import { Square } from './Square';
export declare class Board {
    squares: Square[][];
    constructor();
    getBox(x: number, y: number): Square;
    resetBoard(): void;
}
