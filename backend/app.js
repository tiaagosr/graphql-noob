const graphqlHTTP = require('express-graphql').graphqlHTTP;
const { buildSchema } = require('graphql'); 
const express = require('express');

const server = express();
// Get the Mongoose models used for querying the database
const { User } = require('./src/models.js');
// Start up a GraphQL endpoint listening at /graphql
server.use(
  '/graphql', 
  graphqlHTTP({
    // We construct our GraphQL schema which has two types: // The User type and the Query type (through which all // queries for data are defined)
    schema: buildSchema(`
      input UserInput {
        id: String,
        username: String!
      }

      type Mutation {
        createUser(input: UserInput): User
      }

      type User { 
        _id: String
        username: String 
      }

      type Query {
        user(username: String!): User
        users: [User]
      }`
    ),
    // The methods that we'll use to get the data for our // main queries
    rootValue: {
      // Get a user based on the ID and return it as a Promise
      async user({ username }) {
        return User.findOne({ username }).exec();
      },
      async createUser({ input }) {
        return User.create({ username: input.username });
      },
      users() {
        return User.find();
      }
    },
    // Display the GraphiQL web interface (for easy usage!)
    graphiql: true
  })
);
// Start the application, listening on port 3000
server.listen(3000);

// Query Example:
// mutation createUser {
//   createUser(input: {username: "Foo"}) {
//     username
//   }
// }

// query getAll {
//   users {
//     username
//   }
// }

// query getUser {
//   user(username: "Foo") {
//     username
//     _id
//   }
// }