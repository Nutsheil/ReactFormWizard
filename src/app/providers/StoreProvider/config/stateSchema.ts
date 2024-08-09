import type { Form1Schema } from 'pages/Form1Page';
import type { Form2Schema } from 'pages/Form2Page';
import type { Form3Schema } from 'pages/Form3Page';

export interface StateSchema {
  form1: Form1Schema;
  form2: Form2Schema;
  form3: Form3Schema;
}

export type StateSchemaKey = keyof StateSchema;
