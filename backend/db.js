const { default: mongoose } = require("mongoose");

mongoose.connect('mongodb+srv://aparnamolks:aparna123@todo-app.4yjmmxo.mongodb.net/Paytm')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

const User = mongoose.model('users', UserSchema);

module.exports = {
    User
};