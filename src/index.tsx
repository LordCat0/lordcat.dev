import App from './components/app/app';
import { render } from 'preact';

import './index.css';

const appElement = document.getElementById('app');
if (!appElement) {
  throw new Error('Missing app root element');
}

render(<App />, appElement);