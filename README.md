## `babel-preset-rung`

This preset comes with the latest ES7 features and new operators, which helps
you to write a more readable and compact functional point-free code.

### Installation

Install the preset with the last stable version of **babel** in your development
environment:
```bash
yarn add babel-cli babel-preset-rung --dev
```

Then you will just need to create a `.babelrc` with the contents:
```json
{
    "presets": ["rung"]
}
```

There are no additional options, this preset detects if you are using `react`,
`bluebird`, or other libraries before using the appropriate plugins.
