import { connect, disconnect } from "./connection.mjs";
import { save, read,update,remove } from "./dataAccess/booksDataAccess.mjs";


await connect();

const  book = {
    author:'Robert',
    title: 'The second',
    year: 2022
}

const a=await save(book);
console.log(a)
console.log(await read('61aa6c841c4bd9a31ca34bf0'));
book.title='The Third';
console.log(await update('61aa6c841c4bd9a31ca34bf0',book));

await remove(a.id);
disconnect();