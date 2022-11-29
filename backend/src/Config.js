import Songs from '#lib/songs/Songs';
import {
  createErrorResponse,
  createSuccessResponse,
  createValidateError,
} from '#modules/responseHandler/responses';
import Validations from '#modules/validation/Validations';
import CustomErrors from '#modules/responseHandler/CustomErrors';
import string from '#modules/helpers/StringHelper';
import date from '#modules/helpers/DateHelper';
import DatabaseHelpers from '#modules/db/DatabaseHelpers';

const Config = {
  // All collections need to be stored here
  collections: [
    Songs,
  ],

  // All collections services need to be setup here
  setupLibs(ctx) {
    const { songs } = Songs.setupServices(ctx);

    return {
      songs,
    };
  },

  // All modules services need to be setup here
  setupMods() {
    return {
      validations: Validations,
      responses: {
        createSuccessResponse,
        createErrorResponse,
        createValidateError,
        CustomErrors,
      },
      string,
      date,
      db: DatabaseHelpers,
    };
  },
};

export { Config };
export default { Config };
