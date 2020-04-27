const express = require('express')
const app = express()
// const schema = require('./schemas/shit')
const {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
} =require('graphql');

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/say_bitch', function (req, res) {
    res.send('BITCH')
})

app.get('/graphqlschema/:schemaType', function (req, res) {
    var query = `{ ${req.params.schemaType} }`;
    console.log(query);
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
    graphql(schema, query).then((result) => {
        // Prints
        // {
        //   data: { hello: "world" }
        // }
        console.log(result);
        res.send(result)
    });
    
})

app.listen(3000)
console.log('SHITTY GRAPHQL APP LISTENING ON PORT 3000')