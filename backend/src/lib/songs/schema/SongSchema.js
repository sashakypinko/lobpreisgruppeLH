import CommonSchemaFields from '#modules/validation/CommonSchemaFields';

const {
  _id,
  basicString,
  date,
} = CommonSchemaFields;

const SongSchema = {
  bsonType: 'object',
  required: [
    'name',
  ],
  additionalProperties: false,
  properties: {
    _id,
    name: basicString,
    updatedAt: date,
    createdAt: date,
  },
};

export default SongSchema;
