import type { StateSchema } from 'app/providers/StoreProvider';

export const getForm1FirstName = (state: StateSchema) => state.form1.firstName;
