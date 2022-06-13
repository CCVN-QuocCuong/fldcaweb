## Module alias

Use [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver) to setup alias for modules

In babel.config.js
```
plugins: [
  ['module-resolver', {
    root: ['./src/App'],
    alias: {
      '@app': './src',
      '@auth': './src/modules/Authentication',
    }
  }]
]
```

