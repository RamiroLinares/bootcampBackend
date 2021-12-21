import { Player } from '../../Core/models/Player';
describe('Player', () => {
    it('Player Initializing in white', () => {
        const player=new Player();
        expect(player.isWhiteTurn()).toEqual(true);
    });
    it('Player toggle turn to Black correctly', () => {
        const player=new Player();
        player.togglePlayer();
        expect(player.isWhiteTurn()).toEqual(false);
    });
    
});