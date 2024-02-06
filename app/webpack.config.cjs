// Para configurar la ruta de los archivos en el disco del servidor
const path = require("path");
// Para congigurar el html
const HtmlWebpackPlugin = require("html-webpack-plugin");
// Para separar el css en otro bundle
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// Para copiar los archivos de la carpeta public a dist
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (env, argv) => ({
  // Documento de entrada
  entry: "./index.js",
  // Documento de salida
  output: {
    // Nombre del archivo de salida
    filename: "[name].bundle.js",
    // Ruta del archivo de salida
    path: path.resolve(__dirname, "dist"),
  },
  // Configurar webpack para que utlice modulos de tipo ES6
  experiments: {
    outputModule: true,
  },
  module: {
    // Reglas de los módulos
    rules: [
      // Se pone la regla para los archivos js por defecto
      {
        test: /\.n?js$/,
        exclude: /node_modules/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      // Se pone la regla para babel
      {
        test: /\.(ts|tsx|js|mjs|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      // Se pone la regla para css
      {
        test: /\.css|s[ac]ss$/i,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      // Se pone la regla para las imagenes, fuentes, audios y videos
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|mp3|wav|mp4|webm)$/,
        exclude: /node_modules/,
        type: "asset/resource",
        // Se configura assets y uso de las carpetas de assets
        generator: {
          filename: "assets/[name][ext]",
        },
      },
      // Se pone la regla para los archivos html
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      // Se pone la regla para los archivos json - manifest
      {
        test: /\.(json)$/,
        exclude: /node_modules/,
        type: "asset/resource",
        generator: {
          filename: "./[name][ext]",
        },
      },
    ],
  },
  // Configuración de los plugins
  plugins: [
    // Se pone la configuración de html
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "./index.html",
      scriptLoading: "module",
    }),
    // Se pone la configuración de css
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    //Se pone la configuración de copiar archivos
    new CopyPlugin({
      patterns: [
        { from: "./src/images/icons/pantallazo", to: "assets" },
        { from: "./src/sounds/fairy.mp3", to: "assets" },
        { from: "./sw.js", to: "./" },
      ],
    }),
  ],
});
