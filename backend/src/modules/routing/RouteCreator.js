const createRoutes = ({ prefix = '', routeData = [] }) => routeData.map(
  routeElement => {
    const {
      method,
      path,
      validation,
      handler,
    } = routeElement;

    return {
      method,
      path: `${prefix}${path}`,
      steps: [
        // Validate parameters
        async ctx => {
          const { CustomErrors, createValidateError } = ctx.modS.responses;
          if (validation) createValidateError(await validation(ctx), ctx, CustomErrors.BAD_REQUEST);
        },
        // Handle
        async ctx => handler(ctx),
      ],
    };
  },
);

export default createRoutes;
