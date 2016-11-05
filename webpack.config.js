var conf_path="./src/hwcConf.js";
var hwc_conf=require(conf_path);
var p=require("path");

hwc_conf.paths.hwc_js_kernel_loader=hwc_conf.paths.hwc_js_kernel;

module.exports = {
  entry: [
        conf_path,
        './modules/angular-xt/plugin/index.js',
        './src/hw2site.js'
  ],
  output: {
    path: 'output',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
      root: p.resolve(__dirname),
      alias: hwc_conf.paths,
      extensions: ['', '.js', '.jsx']
  }
};
