const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.27017/mymongo');

const userSchema = mongoose.Schema ({
    image: String,
});
module.exports = mongoose.model("user",userSchema);