import React, { useState } from 'react';
import { useQuery } from 'graphql-hooks';

const COUNTRIES_QUERY = `query Countries {
  countries {
    code
    name
  }
}`;

const ChildComponent = () => {
  const [count, setCount] = useState(0);
  const { loading, error, cacheHit } = useQuery(COUNTRIES_QUERY);

  if (loading || error) {
    return <></>;
  }

  console.log({ cacheHit });

  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );
};

export default ChildComponent;
