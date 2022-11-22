const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const infoSchema = new Schema({

},{
    timestamps: true,
});

const Info = mongoose.model('Info',infoSchema);
module.exports = Info;