# React S3 File Upload with Cognito Identity Pool

This project demonstrates how to upload files to Amazon S3 using React.js and Cognito Identity Pool for authentication and authorization.

## Prerequisites
Before you begin, ensure you have the following:

- AWS Account: You need an AWS account to set up Cognito Identity Pool and S3 bucket.
- Node.js: Make sure you have Node.js installed on your development machine.
- AWS CLI (optional): You can install AWS CLI to configure AWS credentials on your local machine.

## Installation
```bash
git clone https://github.com/sabarishOfficial/ReactS3UploadCognitoIdentityPool.git

cd ReactS3UploadCognitoIdentityPool

npm install --legacy-peer-deps
```
# Configuration
1. Set Up Cognito Identity Pool:
 - Go to the AWS Management Console, navigate to Cognito, and create a new Identity Pool.
- Configure the Identity Pool with the necessary permissions, including access to S3. 
- Note down the Identity Pool ID.
2. Configure AWS SDK:
- Open aws_credentals.js file in the project.
- Replace 'your-region' with your AWS region.
- Replace 'your-identity-pool-id' with your Cognito Identity Pool ID.

## Usage
```bash
npm start
```
Open your browser and go to http://localhost:3000 to view the application.

Use the file upload component to select and upload files to your S3 bucket.

## Additional Notes
- Ensure your S3 bucket has the necessary CORS configuration to allow uploads from your React.js application.
- Handle errors and security considerations appropriately in your application code.
- Customize the application UI and functionality according to your requirements.
