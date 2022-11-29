import SongsServices from './services/SongsServices';
import SongEnums from './enums/SongEnums';

/**
 * @param  {object} ctx
 *
 * @return {{ files: SongsServices }}
 *
 */
const setupServices = ctx => {
  const { db } = ctx;
  const collection = db[SongEnums.COLLECTION_NAME];

  // noinspection JSValidateTypes
  return {
    [SongEnums.COLLECTION_NAME]: new SongsServices(collection),
  };
};

export default setupServices;
