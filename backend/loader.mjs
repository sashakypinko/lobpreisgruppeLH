// This loader is a workaround if node js removes the --es-module-specifier-resolution=node
// It should be used in the package.json: { "start": "node --experimental-loader ./loader.mjs index.js",}

export async function resolve(specifier, context, defaultResolve) {

  if(specifier.startsWith('.') || specifier.startsWith('#') || specifier.startsWith('lodash-es/')) {
    const lastOfArray = specifier.split('/').pop();

    if(!lastOfArray.includes('.')) {
      return defaultResolve(`${specifier}.js`, context, defaultResolve);
    }
  }

  return defaultResolve(specifier, context, defaultResolve);
}
