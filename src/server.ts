'use strict'

import cors from 'cors';

const express = require('express');
const {graphqlHTTP} = require('express-graphql');
import {schema} from "./root";

const app = express();

app.use(cors({
    methods: ['GET', 'POST', 'OPTIONS']
}))

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

console.log('Server Started')
app.listen(4000);
