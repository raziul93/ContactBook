import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Form from './components/Form';
import View from './components/View';

const App = () => {
  return (
    <>
    <Header />
    <main>
      <Form />
      <View />
    </main>
    </>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);