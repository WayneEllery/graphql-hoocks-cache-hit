import React from 'react';
import { GraphQLClient, ClientContext } from 'graphql-hooks';
import memCache from 'graphql-hooks-memcache';
import './App.css';
import ChildComponent from './ChildComponent';

const client = new GraphQLClient({
  url: 'https://countries.trevorblades.com/',
  cache: memCache(),
});

function App() {
  return (
    <ClientContext.Provider value={client}>
      <ChildComponent />
    </ClientContext.Provider>
  );
}

export default App;
