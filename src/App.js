import AppRouter from './routers/AppRouter';
import { Provider } from "react-redux";
import { persistor, store } from './store/store';
import { ThemeProvider } from '@emotion/react';
import { JCMTheme } from './theme';
import './App.css'
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
        <ThemeProvider theme={JCMTheme}>
          <AppRouter />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
