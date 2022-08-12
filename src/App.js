import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import JobContext from './context/JobContext';
import AllJobs from './components/AllJobs';
import { useState } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://api.graphql.jobs',

  }),
});

function App() {
  const [jobs, setJobs] = useState([]);
  return (
    <div>

      <ApolloProvider client={client}>
        <JobContext.Provider value={{ jobs, setJobs }}>
          <AllJobs />
        </JobContext.Provider>
      </ApolloProvider>

    </div>
  );
}

export default App;
