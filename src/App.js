import React from 'react';
import './App.css';
import Nav from './comp/nav';
import ContentBCG from './comp/content_bcg';

function App() {
  return (
    <React.Fragment>
      <Nav></Nav>
      <ContentBCG></ContentBCG>
    </React.Fragment>
  );
}

export default App;
