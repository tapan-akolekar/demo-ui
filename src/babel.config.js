module.exports = {
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
