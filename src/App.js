import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './client';
import Layout from './components/Layout/Layout';


function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}/>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
