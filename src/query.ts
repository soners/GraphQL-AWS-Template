import {GraphQLInt, GraphQLObjectType, GraphQLString} from "graphql";

export const queryType = new GraphQLObjectType({
    name: 'RootQuery',
    description: 'It works!',
    fields: () => ({
        hello: {
            type: GraphQLString,
            resolve: () => 'Hello'
        },
        world: {
            type: GraphQLString,
            resolve: () => 'World'
        },
        count: {
            type: GraphQLInt,
            resolve: () => 3
        }
    })
})