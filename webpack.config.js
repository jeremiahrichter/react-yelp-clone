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
const isTest = NODE_ENV === 'test';

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
if (isTest) {
    config.externals = {
        'react/lib/ReactContext': true,
        'react/lib/ExecutionEnvironment': true,
        'react/addons': true,
    };

    config.plugins = config.plugins.filter(p => {
        const name = p.constructor.toString();
        const fnName = name.match(/^function (.*)\((.*\))/);

        const idx = [
            'DedupePlugin',
            'UglifyJsPlugin'
        ].indexOf(fnName[1]);
        return idx < 0;
    })
}

config.resolve.root = [src, modules];
config.resolve.alias = {
    'css': join(src, 'styles'),
    'containers': join(src, 'containers'),
    'components': join(src, 'components'),
    'utils': join(src, 'utils')
};

config.plugins = [
    new webpack.DefinePlugin(defines)
].concat(config.plugins);

config.postcss = [].concat(
    require('precss')({}),
    require('autoprefixer')({}),
    require('cssnano')({})
);

module.exports = config;