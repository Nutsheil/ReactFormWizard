import { lazy } from 'react';

export const Form3PageAsync = lazy(() => import('./Form3Page'));
// export const Form3PageAsync = lazy(
//   () =>
//     new Promise(resolve => {
//       setTimeout(() => {
//         // @ts-ignore
//         resolve(import('./Form3Page'));
//       }, 1500);
//     }),
// );
