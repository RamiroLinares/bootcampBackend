import { Iplayer } from './IPlayer';

export class Player implements Iplayer {
    private whiteTurn;
    constructor() {
        this.whiteTurn = true;
    }
    togglePlayer() {
        this.whiteTurn = !this.whiteTurn;
    }
    isWhiteTurn(): boolean {
        return this.whiteTurn;
    }
}