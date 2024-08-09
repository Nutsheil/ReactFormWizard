import type { ReactNode } from 'react';
import { Provider } from 'react-redux';
import type { StateSchema } from '../config/stateSchema';
import { createReduxStore } from '../config/store';

interface IStoreProvider {
  children: ReactNode;
  initialState?: StateSchema;
}

export const StoreProvider = (props: IStoreProvider) => {
  const { children, initialState } = props;

  const store = createReduxStore(initialState as StateSchema);

  return <Provider store={store}>{children}</Provider>;
};
