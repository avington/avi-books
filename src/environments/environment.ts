// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  google: {
    oath2: 'https://accounts.google.com/o/oauth2/v2/auth',
    clientId: '474819375433-k249ib6o8f784f1is1r0dnc113dmmpsi.apps.googleusercontent.com',
    responseType: 'token',
    redirectUri: 'http://localhost:4200/oath2/callback',
    scopes: 'https://www.googleapis.com/auth/books',
    state: ''
  }

};
