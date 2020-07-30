import React from 'react';
import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <Menu />
        <h1>Conteúdo no centro</h1>
      <Footer />
    </React.Fragment>
  );
}

export default App;
