import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { DefinePlugin } from "webpack";
export function buildPlugins(_a) {
    var mode = _a.mode, paths = _a.paths, platform = _a.platform;
    return [new HtmlWebpackPlugin({ template: paths.html }),
        new MiniCssExtractPlugin(),
        new DefinePlugin({
            __PLATFORM__: JSON.stringify(platform),
        })];
}
