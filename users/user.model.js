const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: { type: String, unique: true, required: false },
    hash: { type: String, required: false },
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    avatar: { type: String, required: false },
    status: { type: Boolean, required: false, default: false },
    department: { type: String, required: false },
    position: { type: String, required: false },
    skills: { type: [String], required: false },
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);