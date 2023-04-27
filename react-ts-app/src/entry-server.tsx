import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { Provider } from 'react-redux';
import { setupStore } from './redux/store';

export function render() {
  const store = setupStore({});
  const html = ReactDOMServer.renderToPipeableStream(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
  return { html };
}
