import {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
  } from 'graphql';
   
  var schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'RootQueryType',
      fields: {
        shit: {
          type: GraphQLString,
          resolve() {
            return 'shit';
          },
        },
      },
    }),
  });
  module.exports=schema;