var mongoose = require("./sqlConfig");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: { type: String },
    phone: { type: String },
    password: { type: String }
}, { versionKey: false, collection: 'mongoTest' });
module.exports = mongoose.model('User', UserSchema);