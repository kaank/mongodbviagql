const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

//allow cors
app.use(cors());

//Connect to mlab DB
mongoose.connect('mongodb://dev:test1234@ds239217.mlab.com:39217/gql-kaan',{ useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('connected to db');
});

app.use('/graphql', graphqlHTTP(
    {
        schema,
        graphiql: true
    }
)
);

app.listen(4000, () => {
    console.log('now listening on port 4000');
});