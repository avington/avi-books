export const environment = {
  production: true,
  google: {
    oath2: 'https://accounts.google.com/o/oauth2/v2/auth',
    clientId: '474819375433-k249ib6o8f784f1is1r0dnc113dmmpsi.apps.googleusercontent.com',
    responseType: 'token',
    redirectUri: 'http://localhost:4200/oath2/callback',
    scopes: 'https://www.googleapis.com/auth/books',
    state: ''
  }
};
