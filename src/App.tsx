import { Outlet, RouterProvider, createRouter, createRootRoute, createRoute } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';

const queryClient = new QueryClient();

const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: CharacterList,
  validateSearch: (search: any) => ({ page: Number(search.page) || 1 }),
});

const characterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/character/$id',
  component: CharacterDetail,
});

const routeTree = rootRoute.addChildren([indexRoute, characterRoute]);

const router = createRouter({
  routeTree,
});

export default function App() {
  return <RouterProvider router={router} />;
}
