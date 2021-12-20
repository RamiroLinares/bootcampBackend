import { Iplayer } from './IPlayer';
export declare class Player implements Iplayer {
    private whiteTurn;
    constructor();
    togglePlayer(): void;
    isWhiteTurn(): boolean;
}
