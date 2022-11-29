import createBasicRoutes from '#modules/routing/RouteCreator';

import ProductsController from './SongController.js';

const SongRoutes = createBasicRoutes(
  {
    prefix: '/songs',
    routeData: [
      {
        method: 'post',
        path: '/all',
        handler: ProductsController.getAll,
      },
    ],
  },
);

export default SongRoutes;
