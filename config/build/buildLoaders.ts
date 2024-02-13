import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types";
export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
    const ReactRefreshTypeScript = require('react-refresh-typescript');
    const isDev = options.mode === 'development'
    const hashCssModule = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev ? "[path][name]__[local]" : '[hash:base64:8]'
            },

        },
    }

    return [{
        test: /\.s[ac]ss$/i,
        use: [
            MiniCssExtractPlugin.loader,
            hashCssModule,
            "sass-loader",
        ],
    }, {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
    },
    // {
    //     exclude: /node_modules/,
    //     test: /\.[jt]sx?$/,
    //     use: [
    //         {
    //             loader: 'ts-loader',
    //             options: {
    //                 getCustomTransformers: () => ({
    //                     before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
    //                 }),
    //                 transpileOnly: true,
    //             }
    //         }
    //     ]
    // }, 
    {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }, {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    },
    {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
        }
    }]
}

function ReactRefreshTypeScript() {
    throw new Error("Function not implemented.");
}
