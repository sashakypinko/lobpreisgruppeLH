import ServicesBase from '#lib/base/services/ServicesBase';
import SongsHelpers from '#lib/songs/services/SongsHelpers';

class SongsServices extends ServicesBase {
  helpers = {
    ...super.getHelpers(),
    ...SongsHelpers,
  };

  publicParams = {};
}

export default SongsServices;
