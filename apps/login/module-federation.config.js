module.exports = {
  name: 'login',
  exposes: {
    './Module': 'apps/login/src/app/remote-entry/entry.module.ts',
    './StandaloneComponent': 'apps/login/src/app/standalone/standalone.component.ts',
  },
};
