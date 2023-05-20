import {Schema, model} from 'mongoose';

const cartSchema = new Schema({
    name: {type: String, required: true, unique: true},
    imgURL: {type: String, required: true},
    amount: {type: Number, required: true},
    price: {type: Number, required: true}
});

export default model('Cart', cartSchema);