import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AllJobs from './components/AllJobs';
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://api.graphql.jobs',

  }),
});

function App() {
  return (
    <div>

      <ApolloProvider client={client}>
        <AllJobs />
      </ApolloProvider>

    </div>
  );
}

export default App;
