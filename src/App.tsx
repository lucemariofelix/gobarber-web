import React from 'react';

import GlobalStyle from './styles/global';

import Authcontext from './context/Authcontext';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

const App: React.FC = () => (
  <>
    <Authcontext.Provider value={{ name: 'Lucemario' }}>
      <SignIn />
    </Authcontext.Provider>

    <GlobalStyle />
  </>
);

export default App;
