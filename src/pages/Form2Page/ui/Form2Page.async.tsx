import { lazy } from 'react';

export const Form2PageAsync = lazy(() => import('./Form2Page'));
// export const Form2PageAsync = lazy(
//   () =>
//     new Promise(resolve => {
//       setTimeout(() => {
//         // @ts-ignore
//         resolve(import('./Form2Page'));
//       }, 1500);
//     }),
// );
