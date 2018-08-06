module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
      filename: "bundle.js",
      path: __dirname + "/dist"
  },
  devtool: "source-map",
  resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
      rules: [
        {
            test: /\.tsx?$/, 
            loader: "awesome-typescript-loader" 
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                {
                  loader: 'typings-for-css-modules-loader',
                  options: {
                    modules: true,
                    namedExport: true
                  }
                }
              ]
        },
        { 
              enforce: "pre", 
              test: /\.js$/, 
              loader: "source-map-loader"
        }
      ]
  },
};