import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { ReactLazyPreload } from './config/lazyload/Lazyload';
import store, { persistor } from './store';

const Routes = ReactLazyPreload(() => import('./routes/Routes'));

const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.Suspense fallback={null}>
        <Routes />
      </React.Suspense>
    </PersistGate>
  </Provider>
);

export default React.memo(App);
