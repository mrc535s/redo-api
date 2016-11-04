var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CanidateSchema = new mongoose.Schema({
  name: {
        type:String,
        required: true,
        unique: true
    },
  votes: {type: Number, default: 1},
});

module.exports = mongoose.model('Canidate', CanidateSchema);
