module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current'
          }
        }
      ],
      '@babel/preset-typescript'
    ],
    plugins: [
      ['module-resolver', {
        alias: {
          '@middlewares': './src/middlewares',
          '@providers': './src/providers',
          '@repositories': './src/repositories',
          '@routes': './src/routes',
          '@useCases': './src/useCases',
          '@entities': './src/entities',
          '@database': './src/database'
        }
      }]
    ],
    ignore: [
      '**/*.spec.ts'
    ]
  }