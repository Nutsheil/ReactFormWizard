import type { ReducersMapObject } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import type { StateSchema } from './stateSchema';
import { form1Reducer } from 'pages/Form1Page';
import { form2Reducer } from 'pages/Form2Page';
import { form3Reducer } from 'pages/Form3Page';

export function createReduxStore(initialState: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    form1: form1Reducer,
    form2: form2Reducer,
    form3: form3Reducer,
  };

  const store = configureStore({
    reducer: rootReducers,
    preloadedState: initialState,
  });

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
