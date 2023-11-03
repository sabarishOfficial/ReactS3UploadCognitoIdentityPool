import AWS from 'aws-sdk';

AWS.config.update({
  region: 'us-east-1', //region example i'm given
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: '', //identitypool_id exam 
  }),
});

const s3 = new AWS.S3();
export default s3;
