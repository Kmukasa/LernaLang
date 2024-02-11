const path = require("path");
const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");

const defaultConfig = getDefaultConfig(__dirname);
const {
  resolver: { sourceExts, assetExts },
} = defaultConfig;

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  },
  resolver: {
    assetExts: assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...sourceExts, "svg"],
    resolverMainFields: ["sbmodern", "react-native", "browser", "main"],
  },
  watchFolders: [path.resolve(__dirname, "../")],
};

module.exports = mergeConfig(defaultConfig, config);

// const { getDefaultConfig } = require("expo/metro-config");

// module.exports = (() => {
//   const config = getDefaultConfig(__dirname);

//   config.resolver.resolverMainFields.unshift("sbmodern");

//   const { transformer, resolver } = config;

//   config.transformer = {
//     ...transformer,
//     babelTransformerPath: require.resolve("react-native-svg-transformer"),
//   };
//   config.resolver = {
//     ...resolver,
//     assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
//     sourceExts: [...resolver.sourceExts, "svg"],
//     resolverMainFields: ["sbmodern", "react-native", "browser", "main"],
//   };

//   return config;
// })();
