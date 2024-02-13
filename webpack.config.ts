import webpack from 'webpack';
import 'webpack-dev-server';
import { buildWebpack } from './config/build/buildWebpack';
import { Mode, BuildPaths, BuildPlatform } from './config/build/types';
import path from 'path';

interface EnvProps {
    mode?: Mode
    port?: number
    platform?: BuildPlatform
}

export default (env: EnvProps) => {
    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'Main.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html')
    }
    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        paths,
        platform: env.platform ?? 'desktop'
    })
    return config
}