import React from 'react';
import './App.css';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
    <Authenticator>             
      {({ signOut, user }) => ( // what is this structure? how does authenticator make these variables available? // this code is in the frontend code but links to the backend?   
        <div className="App"> 
          <p>
            Hey {user.username}, welcome to my channel, with auth!
          </p>
          <button onClick={signOut}>Sign out</button>
        </div>
      )}
    </Authenticator>
  );
}

export default App;