module.exports = {
  // presets: [
  //   ["@babel/preset-env", { targets: { node: "current" } }],
  //   "@babel/preset-react",
  //   "@babel/preset-typescript",
  // ],

  presets: [
    "@babel/preset-react",
    ["@babel/preset-env", { targets: { node: "current" } }],
  ],
  overrides: [
    {
      test: "*.vue",
      presets: [["@babel/preset-typescript"], { ignoreExtensions: true }],
    },
  ],
};
