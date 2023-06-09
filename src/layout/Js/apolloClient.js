import { ApolloClient, InMemoryCache } from '@apollo/client';

import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';

const httpLink = new HttpLink({
    uri: "https://growing-kite-27.hasura.app/v1/graphql",
    headers:{
        "x-hasura-admin-secret": "OMVe98tUnlrZc1bRVA2skqFlE4hVlGSZPCogdOT9Yq7TyU0XK7x7yBr16HhYPDKo"
    }
});

const wsLink = new WebSocketLink({
    uri: "wss://growing-kite-27.hasura.app/v1/graphql",
    options: {
        reconnect: true,
        connectionParams: {
            headers:{
                "x-hasura-admin-secret": "OMVe98tUnlrZc1bRVA2skqFlE4hVlGSZPCogdOT9Yq7TyU0XK7x7yBr16HhYPDKo"
            }
        }
    }
})

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === "OperationDefinition" && definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink
);

const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
});

export default client;