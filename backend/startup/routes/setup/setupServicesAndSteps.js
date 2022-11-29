import servicePool from '#modules/services/servicePool';

import onError from '../../startupHelpers/onError';

const setupServicesAndSteps = async (ctx, mongoSetup, steps) => {
  try {
    servicePool.setupModServices(ctx);
    await mongoSetup(ctx);
    servicePool.setupLibServices(ctx);

    for (const step of steps) {
      // eslint-disable-next-line no-await-in-loop
      await step(ctx);
    }

    ctx.status = '200';
  } catch (err) {
    const {
      statusCode: status,
      body,
    } = err?.errorData || {};

    ctx.status = status || 500;

    ctx.body = body || {
      ok: false,
      data: {},
      code: 500,
    };

    onError(err, ctx);
  }
};

export default setupServicesAndSteps;
