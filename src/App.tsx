import React from 'react';
import {Container} from './components/container';

import {Home} from './pages/home';
import {GeneralContext, valueGeneralContext} from './context/general-context';

function App(): JSX.Element {
  return (
    <GeneralContext.Provider value={valueGeneralContext()}>
      <Container>
        <Home />
      </Container>
    </GeneralContext.Provider>
  );
}

export default App;
