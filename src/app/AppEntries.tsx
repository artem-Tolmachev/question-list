import { RouterProvider } from 'react-router-dom';
import { router } from './AppRouts';
import { Provider } from 'react-redux';
import { store } from './AppStore';

export default function AppEntries() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}
