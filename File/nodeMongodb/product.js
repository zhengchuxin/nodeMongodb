var mongoose = require("./sqlConfig");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    productName: { type: String },
    productPrice: { type: String },
    productType: { type: String },
    productImg: { type: String },
    productDes: { type: String },
    _id: { type: Object }
}, { versionKey: false, collection: 'Product' });
module.exports = mongoose.model('TestProduct', UserSchema);