const { share } = require('@angular-architects/module-federation/webpack');

module.exports = {
  name: 'dashboard',
  exposes: {
    './Module': 'apps/dashboard/src/app/remote-entry/entry.module.ts',
  },
  shared: share({
    '@angular/core': {
      singleton: true,
      strictVersion: true,
      requiredVersion: '14.0.0',
    },
    primeng: {
      singleton: true,
      strictVersion: true,
      requiredVersion: '14.0.0',
    },
  }),
};
