function isLetter(letter: string) {
    return (letter.toUpperCase() != letter.toLowerCase());
}

export function deserializeQueryMovement(movement: string): any {
    const movements = [];
    const refForLetterAToBe0: number = 97;
    const refForNumber: number = 1;
    for (let i = 0; i < movement.length; i++) {
        if (isLetter(movement.charAt(i))) {
            movements.push(movement.charCodeAt(i) - refForLetterAToBe0);
        } else {
            movements.push(Number(movement.charAt(i)) - refForNumber)
        }
    }
    return movements;
}