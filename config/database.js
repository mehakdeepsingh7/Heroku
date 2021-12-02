var mongoose = require('mongoose');

var mongoDBUrl = 'mongodb+srv://admin:admin123@cluster0.6itwo.mongodb.net/library?retryWrites=true&w=majority';

mongoose.connect(mongoDBUrl, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));