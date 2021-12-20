"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const Board_1 = require("./Core/models/Board");
/* const app= express()
const port=3000;
app.get('/',async(req,res)=>{
    const BookModel = model<any>('Book', BookSchema);
    const str=await run(BookModel).catch(err => console.log(err));
    console.log(str);
    res.send(str)
})

app.listen(port, () =>{
    console.log(`Server is listening on ${port}`)
})
 */
const board = new Board_1.Board();
for (let i = 0; i <= 7; i++) {
    for (let j = 0; j <= 7; j++) {
        const color = (_a = board.squares[i][j].getPiece()) !== null && _a !== void 0 ? _a : 'empty';
        console.log(color);
    }
}
console.log(board.squares[1][1].getPiece().canMove(board.squares[1][1], board.squares[2][1]));
//# sourceMappingURL=index.js.map