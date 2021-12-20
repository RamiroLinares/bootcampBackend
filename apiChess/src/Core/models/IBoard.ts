import { ISquare } from "./ISquare";

export interface IBoard{
    //squares: ISquare[][];
    getBox(x: number, y: number):any;
    resetBoard():void;
}