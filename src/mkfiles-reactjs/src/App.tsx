// App.tsx

import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import {
  incremented,
  amountAdded,
  doNothing,
} from './features/storage/counterSlice';

import { fetchFirestoreCollection } from './features/data/dataSlice';

// export const App: React.FC<{}> = () => <h1>HI</h1>;

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const firestoreData = useAppSelector((state) => state.data.list);
  const dispatch = useAppDispatch();

  function handleClickIncremented() {
    dispatch(incremented());
  }

  function handleClickAmountAdded() {
    dispatch(amountAdded(5));
  }

  function handleDoNothing() {
    dispatch(doNothing());
  }

  function handleClickMarmoset() {
    // useEffect(() => {
    //   dispatch(fetchFirestoreCollection('marmosets'));
    // }, [dispatch]);
    dispatch(fetchFirestoreCollection('marmosets'));
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello this is Hector</p>
        <p>The current count is: {count}</p>
        <p>
          <button onClick={handleClickIncremented}>Increment by 1</button>
        </p>
        <p>
          <button onClick={handleClickAmountAdded}>Increment by 5</button>
        </p>
        <p>
          <button onClick={handleDoNothing}>Do Nothing</button>
        </p>
        <p>
          <button onClick={handleClickMarmoset}>Fetch Marmosets</button>
        </p>
      </header>
    </div>
  );
}

export default App;
