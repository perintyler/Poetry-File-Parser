/* index.jsx */

import { BrowserTracing } from "@sentry/tracing";
import * as Sentry        from '@sentry/react';
import React              from 'react';
import ReactDOM           from 'react-dom/client';
import reportWebVitals    from './reportWebVitals';
import App                from './App';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';

Sentry.init({
  dsn: "https://1beeb80756894b03a992e3781336e8d5@o4504612748328960.ingest.sentry.io/4504612750884864",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
