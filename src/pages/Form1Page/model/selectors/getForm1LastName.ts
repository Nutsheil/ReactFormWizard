import type { StateSchema } from 'app/providers/StoreProvider';

export const getForm1LastName = (state: StateSchema) => state.form1.lastName;
