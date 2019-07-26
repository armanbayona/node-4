const express = require('express');
const massive = require('massive');


const users = require('./controllers/user.js');

const PORT = 3000;

massive({
  host: 'localhost',
  port: 5432,
  database: 'node4db',
  user: 'postgres',
  password: 'node4db',
}).then(db => {
  const app = express();

  app.set('db', db);

	//MIDDLEWARE
  app.use(express.json());

  //ROUTING USERS
  app.post('/api/register', users.create);

  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});