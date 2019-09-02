import React, { useEffect } from 'react'
import Home from './components/Home'
import Experience from './components/Experience';

const App = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div>
      <Home/>
      <Experience/>
    </div>
  );
}

export default App;
