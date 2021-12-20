"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    constructor() {
        this.whiteTurn = true;
    }
    togglePlayer() {
        this.whiteTurn = !this.whiteTurn;
    }
    isWhiteTurn() {
        return this.whiteTurn;
    }
}
exports.Player = Player;
//# sourceMappingURL=Player.js.map