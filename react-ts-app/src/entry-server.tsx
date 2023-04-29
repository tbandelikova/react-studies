import React from 'react';
import { RenderToPipeableStreamOptions, renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { App } from './App';
import { Provider } from 'react-redux';
import { setupStore } from './redux/store';
import { cardsApi } from './redux/searchCardsApi';

export async function render(url: string, options: RenderToPipeableStreamOptions) {
  const store = setupStore({});
  await Promise.all(store.dispatch(cardsApi.util.getRunningQueriesThunk()));

  const html = renderToPipeableStream(
    <React.StrictMode>
      <Provider store={store}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </Provider>
    </React.StrictMode>,
    options
  );
  return { html };
}
