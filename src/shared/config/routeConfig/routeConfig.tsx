import type { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { Form1 } from 'pages/Form1Page';
import { Form2 } from 'pages/Form2Page';
import { Form3 } from 'pages/Form3Page';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRoutes {
  MAIN = 'main',
  FORM1 = 'form1',
  FORM2 = 'form2',
  FORM3 = 'form3',

  NOT_FOUND = 'not_found',
}

export const routePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.FORM1]: '/form1',
  [AppRoutes.FORM2]: '/form2',
  [AppRoutes.FORM3]: '/form3',

  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: routePaths.main,
    element: <MainPage />,
  },
  [AppRoutes.FORM1]: {
    path: routePaths.form1,
    element: <Form1 />,
  },
  [AppRoutes.FORM2]: {
    path: routePaths.form2,
    element: <Form2 />,
  },
  [AppRoutes.FORM3]: {
    path: routePaths.form3,
    element: <Form3 />,
  },

  [AppRoutes.NOT_FOUND]: {
    path: routePaths.not_found,
    element: <NotFoundPage />,
  },
};
