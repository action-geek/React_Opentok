import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import config from './config_example';

ReactDOM.render(<App
  apiKey={config.API_KEY}
  sessionId={config.SESSION_ID}
  token={config.TOKEN}
  />, document.getElementById('root'));
