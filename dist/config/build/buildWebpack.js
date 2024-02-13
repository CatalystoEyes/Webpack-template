import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
export function buildWebpack(options) {
    var mode = options.mode, paths = options.paths;
    var isDev = options.mode === 'development';
    return {
        mode: options.mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.output,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(),
        devtool: isDev ? 'inline-source-map' : false,
        devServer: isDev ? buildDevServer(options) : undefined
    };
}
