import createBasicRoutes from '../../src/modules/routing/RouteCreator';

const DefaultRoute = createBasicRoutes({
  routeData: [
    {
      method: 'any',
      path: '/',
      handler: ctx => ctx.body = 'Hello API!',
    },
  ],
});

export default DefaultRoute;
