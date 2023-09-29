const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://clementinemory:eapBhjlvmRYgiv5O@cluster0.notfyka.mongodb.net/morning-news';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));

