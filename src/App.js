import Router from "./routes";

import { Provider } from 'react-redux';

import store from './store';

import GlobalStyle from './global';

function App() {
  return (
    <Provider store={store}>
       <Router />
       <GlobalStyle />
    </Provider>
  );
}

export default App;
