module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "airbnb/base",
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/no-shadow": 0,
    "import/prefer-default-export": "off",
    "no-console": "off",
    "no-restricted-syntax": [
      "error",
      {
        selector:
          "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
        message: "Unexpected property on console object was called",
      },
    ],
    "import/no-extraneous-dependencies": "off",
  },
};
