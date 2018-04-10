module.exports = {
  baseUrl: 'ppldo',
  lintOnSave: false,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(graphql|gql)$/,
          exclude: /node_modules/,
          loader: 'graphql-tag/loader',
        },
      ],
    },
  },
}
