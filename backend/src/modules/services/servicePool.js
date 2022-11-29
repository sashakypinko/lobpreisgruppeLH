import { Config } from '../../Config';

const servicePool = {
  setupModServices(ctx) {
    ctx.modS = Config.setupMods();
  },

  setupLibServices(ctx) {
    ctx.libS = Config.setupLibs(ctx);
    ctx.syslogServices = ctx.libS.syslogs;
  },
};

export default servicePool;
