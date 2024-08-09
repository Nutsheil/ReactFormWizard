import { lazy } from 'react';

export const Form1PageAsync = lazy(() => import('./Form1Page'));
// export const Form1PageAsync = lazy(
//   () =>
//     new Promise(resolve => {
//       setTimeout(() => {
//         // @ts-ignore
//         resolve(import('./Form1Page'));
//       }, 1500);
//     }),
// );
