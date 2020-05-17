const express = require('express');
const cors = require('cors');

const app = express().use(cors());
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/TravelapyDB.db');

const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    users(offset:Int = 0, limit:Int = 10): [User]
    user(id:ID!): User
    login(username: String!, password: String!): User
  }

  type User {
    id: ID
    username: String
    password: String
    first_name: String
    last_name: String
    country: String
  }
`);

function query(sql, single) {
    return new Promise((resolve, reject) => {
      var callback = (err, result) => {
        if (err) {
          return reject(err);
        }
        resolve(result);
      };
  
      if (single) db.get(sql, callback);
      else db.all(sql, callback);
    });
}

const root = {
    users: args => {
      return query(
        `SELECT * FROM users LIMIT ${args.offset}, ${args.limit}`,
        false
      );
    },
    user: args => {
      return query(`SELECT * FROM users WHERE id='${args.id}'`, true);
    },
    login: args => {
        return query(`SELECT * FROM users WHERE username='${args.username}'`, true);
    }
}

app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      rootValue: root,
      graphiql: true
    })
  );
  
  app.listen(4201, err => {
    if (err) {
      return console.log(err);
    }
    return console.log('My Express App listening on port 4201');
});