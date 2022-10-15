import React from 'react';
import { useGlobalContext } from './context';

const Home = () => {
    //const name = useContext(AppContext);
      const name = useGlobalContext();
  return (
    <>
     <div>
      Home Page 
     </div>
     <p> {name}</p>
     </>
  )
}

export default Home
