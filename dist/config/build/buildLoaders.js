import MiniCssExtractPlugin from "mini-css-extract-plugin";
export function buildLoaders(options) {
    var isDev = options.mode === 'development';
    var hashCssModule = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev ? "[path][name]__[local]" : '[hash:base64:8]'
            },
        },
    };
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
        {
            exclude: /node_modules/,
            test: /\.tsx?$/,
            use: [
                {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true
                    }
                }
            ]
        }, {
            test: /\.(png|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        }, {
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: [{ loader: '@svgr/webpack', options: { icon: true } }],
        },];
}
