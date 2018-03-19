module.exports = {
  parser: "babel-eslint",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:jsx-a11y/recommended",
    "plugin:flowtype/recommended",
    "prettier",
    "prettier/flowtype",
    "prettier/react"
  ],
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true
  },
  plugins: ["react", "jsx-a11y", "flowtype"],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "import/no-unresolved": 0,
    "react/prop-types": 0,
    "no-console": [
      "error",
      {
        allow: ["warn"]
      }
    ]
  },
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true
    }
  }
};
