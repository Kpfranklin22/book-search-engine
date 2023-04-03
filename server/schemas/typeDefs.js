const { gql } = require('apollo-server-express');

const typeDefs = gql`
 
type User{}

  type Query { 
    fun: String
    singleUser : User
  }

  type Mutation {
    cool: Int
  }
`;

module.exports = typeDefs;
