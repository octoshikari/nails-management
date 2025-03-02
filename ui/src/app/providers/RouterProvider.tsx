import { RouterProvider as Provider, createRoutesView } from 'atomic-router-solid';
import { CalendarPage } from '#pages/Calendar';
import { HomePage } from '#pages/Home';
import { ProfilePage } from '#pages/Profile';
import { WarehousePage } from '#pages/Warehouse';
import { ROUTES, router } from '#shared/lib';
import { Layout } from '#widgets/Layout';

const RoutesView = createRoutesView({
  routes: [
    {
      route: ROUTES.home,
      view: HomePage,
      layout: Layout,
    },
    {
      route: ROUTES.calendar,
      view: CalendarPage,
      layout: Layout,
    },
    {
      route: ROUTES.profile,
      view: ProfilePage,
      layout: Layout,
    },
    {
      route: ROUTES.warehouse,
      view: WarehousePage,
      layout: Layout,
    },
  ],
  otherwise: () => <div>Not Found Page</div>,
});

export const RouterProvider = () => {
  return (
    <Provider router={router}>
      <RoutesView />
    </Provider>
  );
};
