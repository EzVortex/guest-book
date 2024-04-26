const mongoose = require("mongoose");

// MongoDB connection
async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/guestbook');
        console.log('Successfully connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = connectToDatabase;