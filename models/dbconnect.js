const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : 'us-cdbr-iron-east-02.cleardb.net',
    user : 'bd717293221bab',
    password : '9a96ac84',
    database : 'heroku_19229d7d55e8896',
  }
});
module.exports = knex;