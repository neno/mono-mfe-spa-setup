import { FilterBar } from '@myorg/filterbar';
import { Listing } from '@myorg/listing';

function App() {
  return (
    <div className='App'>
      <h1>My Airbnb clone listing apartments in New York</h1>
      <p>
        The app consists of a filterbar and a listing section to display the
        results. The components are independent apps which communicate through
        the global store. The store is responsible for the global state handling
        but also for the communication with the BFF. This enables the queries to
        react whenever the state changes. Therefore when we add a filter to the
        store, the corresponding query gets triggered and every component
        subscribed to the query will get updated.
      </p>
      <FilterBar />
      <Listing />
    </div>
  );
}

export default App;
