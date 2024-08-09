import type { StateSchema } from 'app/providers/StoreProvider';

export const getForm1PhoneNumber = (state: StateSchema) => state.form1.phoneNumber;
