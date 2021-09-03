'use strict';

import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const env = process.env.WEBPACK_ENV || 'development';
const library = 'electron-redux-ipc';

let filename;

if (env === 'production') {
  filename = `${library}.min.js`;
} else {
  filename = `${library}.js`;
}

export default {
  mode: env,
  entry: `${__dirname}/src/index.js`,
  output: {
    path: resolve(__dirname, 'dist'),
    filename,
    library: {
      type: 'module'
    },
  },
  target: 'electron-renderer',
  experiments: {
    outputModule: true
  }
};
