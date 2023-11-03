import React, { useState } from 'react';
import s3 from './aws_credentals';

const S3FileUploadComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      const params = {
        Bucket: 'name', //bucket_name
        Key: selectedFile.name,
        ContentType : selectedFile.type,
        Body: selectedFile,
      };

      s3.upload(params, (err, data) => {
        if (err) {
          console.error('Error uploading file: ', err);
        } else {
          const url = 'https://d2f7htisd51tig.cloudfront.net/'
          console.log('File uploaded successfully. File URL: ', url + data.Key);
        }
      });
    } else {
      console.error('No file selected.');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload File</button>
    </div>
  );
};

export default S3FileUploadComponent;
