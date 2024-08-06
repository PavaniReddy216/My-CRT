import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const messageSchema = new Schema({
    message: {
        type: String,
        required: true
    },
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    receiver: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    datetime: {
        type: Date,
        default: Date.now
    }
});

const Message = model('Message', messageSchema);

export default Message;
