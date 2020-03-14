const CLIENT_ID = process.env.CLIENT_ID;
const ISSUER = process.env.ISSUER || 'https://dev-610289.okta.com';
const OKTA_TESTING_DISABLEHTTPSCHECK = process.env.OKTA_TESTING_DISABLEHTTPSCHECK || false;

export default {
  oidc: {
    clientId: CLIENT_ID,
    issuer: ISSUER,
    redirectUri: 'http://localhost:8080/implicit/callback' || 'https://okta-profile-app.herokuapp.com/implicit/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK,
  },
  resourceServer: {
    messagesUrl: 'http://localhost:8000/api/messages' || 'https://okta-profile-app.herokuapp.com/api/messages',
  },
  customButtons: [{
    title: 'Click Me 1',
    className: 'btn-customAuth waves-effect btn-large pulse black yellow-text'
    // click: function() {
    //     // clicking on the button navigates to another page
    //     window.location.href = 'http://www.example1.com';
    //   }
  }],
};