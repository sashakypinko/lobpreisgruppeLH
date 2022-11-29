import { getParts } from 'uWebSockets.js';

const parseFiles = (buff, contentType) => {
  const files = [];
  const fields = getParts(buff, contentType);

  if (!fields?.length) return [];

  for (let i = 0, len = fields.length, field; i < len; i += 1) {
    field = fields[i];

    if (field.type) {
      field.data = Buffer.from(field.data);
      files.push(field);
    }
  }

  return files;
};

export default parseFiles;
