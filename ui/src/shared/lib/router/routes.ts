import { createRoute } from 'atomic-router';

export const ROUTES = {
  home: createRoute(),
  profile: createRoute(),
  calendar: createRoute(),
  warehouse: createRoute(),
};

export const routesConfig = [
  { path: '/', route: ROUTES.home },
  { path: '/calendar', route: ROUTES.calendar },
  { path: '/profile', route: ROUTES.profile },
  { path: '/warehouse', route: ROUTES.warehouse },
];
