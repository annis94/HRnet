import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';
import './index.css';

// Création de la racine React
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

// Rendu de l'application avec le Provider Redux
// Le Provider permet d'accéder au store Redux dans toute l'application
createRoot(rootElement).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);