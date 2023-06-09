import React, { createContext, useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './Routes';

export const UserContext = createContext({});

function App(): JSX.Element {

  const [user, setUser] = useState();

  useEffect(() => {
    console.log('user : ', user);
  }, [user]);

  return (
    <SafeAreaProvider>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes/>
      </UserContext.Provider>
    </SafeAreaProvider>

  );
}

export default App;
