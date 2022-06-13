/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsConfig = {
    Auth: {
        "aws_project_region": "ap-southeast-2",
        "aws_cognito_region": "ap-southeast-2",
        "aws_user_pools_id": "ap-southeast-2_vRy8cEe3L",
        "aws_user_pools_web_client_id": "5jmj152u8obb246iqkvhfjrbqu"
      },
    oauth: {
      domain: 'fieldlogging.auth.ap-southeast-2.amazoncognito.com',
      scope: [
        'phone',
        'email',
        'openid',
        'profile',
        'aws.cognito.signin.user.admin',
      ],
      clientID: '5jmj152u8obb246iqkvhfjrbqu',
      localRedirectSignIn: 'fieldlogging://',
      localRedirectSignOut: 'fieldlogging://',
      responseType: 'code',
    },
    federationTarget: 'COGNITO_USER_POOLS',
};

const config = {
  ...awsConfig.Auth,
  oauth: {
    ...awsConfig.oauth,
    redirectSignIn: `${window.location.origin}/login`,
    redirectSignOut: `${window.location.origin}/login`,
  }
}

export default config;