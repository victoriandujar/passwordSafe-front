import Router from "./routes";

import { Provider } from 'react-redux';

import store from './store';

import GlobalStyle from './global';

import 'antd/dist/antd.css';

function App() {
  return (
    <Provider store={store}>
       <Router />
       <GlobalStyle />
    </Provider>
  );
}

export default App;
