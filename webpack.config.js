const webpack = require('webpack');
const fs = require('fs');
const path = require('path'),
    join = path.join,
    resolve = path.resolve;
const getConfig = require('hjs-webpack');

const root = resolve(__dirname);
const src = join(root, 'src');
const dest = join(root, 'dist');
const modules = join(root, 'node_modules');

const NODE_ENV = process.env.NODE_ENV;
const isDev = NODE_ENV === 'development';

const dotenv = require('dotenv');
const dotEnvVars = dotenv.config();
const environmentEnv = dotenv.config({
    path: join(root, 'config', `${NODE_ENV}.config.js`),
    silent: true,
});
const envVariables =
    Object.assign({}, dotEnvVars, environmentEnv);
const defines =
    Object.keys(envVariables)
        .reduce((memo, key) => {
            const val = JSON.stringify(envVariables[key]);
            memo[`__${key.toUpperCase()}__`] = val;
            return memo;
        }, {
            __NODE_ENV__: JSON.stringify(NODE_ENV)
        });

var config = getConfig({
    isDev: isDev,
    in: join(src, 'app.js'),
    out: join(dest),
    clearBeforeBuild: true
});

config.plugins = [
    new webpack.DefinePlugin(defines)
].concat(config.plugins);

config.postcss = [].concat(
    require('precss')({}),
    require('autoprefixer')({}),
    require('cssnano')({})
);

module.exports = config;