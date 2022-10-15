import { ApolloClient, InMemoryCache  } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://feya-bilyzna-dev.herokuapp.com/api',
    cache: new InMemoryCache(),
})

export default client;
