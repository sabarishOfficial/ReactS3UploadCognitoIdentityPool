import './App.css';
import React from 'react';
import S3FileUploadComponent from './S3FileUploadComponent';

const App = () => {
  return (
    <div className="App">
      <h1>File Upload to S3 using React and Cognito</h1>
      <S3FileUploadComponent />
    </div>
  );
};

export default App;
