module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-react/",
    "@babel/preset-typescript",
  ],
  // alias: {
  //   "@components": "<rootDir>/src/components",
  // },
};
