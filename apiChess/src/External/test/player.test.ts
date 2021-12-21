import { Player } from '../../Core/models/Player';
describe('Player', () => {
    const player = new Player();
    it('Player Initializing in white', () => {
        expect(player.isWhiteTurn()).toEqual(true);
    });
    it('Player toggle turn to Black correctly', () => {
        player.togglePlayer();
        expect(player.isWhiteTurn()).toEqual(false);
    });

});