import AppRouter from './routers/AppRouter';
import { Provider } from "react-redux";
import { store } from './store/store';
import { ThemeProvider } from '@emotion/react';
import { JCMTheme } from './theme';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={JCMTheme}>
      <AppRouter />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
