import React from 'react';
import { useGlobalContext } from './context';
import Movies from './Movies';
import Search from './Search';
const Home = () => {
    //const name = useContext(AppContext);
    //const name = useGlobalContext();
  return (
    <>
     <div>
    <Search />
    <Movies />
     </div>
     {/* <p> {name}</p> */}
     </>
  )
}

export default Home
