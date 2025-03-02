import { createHistoryRouter, createRouterControls } from 'atomic-router';
import { createBrowserHistory } from 'history';
import { routesConfig } from '#shared/lib';

export const controls = createRouterControls();

export const router = createHistoryRouter({
  routes: routesConfig,
  controls,
});

router.setHistory(createBrowserHistory());
