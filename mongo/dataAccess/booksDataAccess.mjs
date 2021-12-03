import BookSchema from './../models/Book.mjs'

export async function save(bookToInsert){
    try {
        const bookModel= new BookSchema(bookToInsert);
        return await bookModel.save();
    } catch (error) {
        console.error(error);
    }
}

export async function read(id){
    try {
        return await BookSchema.findById(id).lean();
    } catch (error) {
        console.error(error);
    }
}

export async function update(id, bookToUpdate){
    try {
        return await BookSchema.findByIdAndUpdate(id, bookToUpdate).lean();
    } catch (error) {
        console.error(error);
    }
}

export async function remove(id, bookToUpdate){
    try {
        return await BookSchema.findByIdAndDelete(id).lean()
    } catch (error) {
        console.error(error);
    }
}
