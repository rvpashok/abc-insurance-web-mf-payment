const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'web-mf-payment',

  exposes: {
   // './Component': './src/app/app.component.ts',
   //'./Component': './src/app/claims/claims.component.ts',
   './Module': './src/app/claims/claims.module.ts',
   //'./Module': './src/app/app.routes.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
