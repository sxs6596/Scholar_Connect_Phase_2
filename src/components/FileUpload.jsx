import React, { useState } from 'react';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = (e) => {
    e.preventDefault();
    if (file) {
      const newFile = { fileName: file.name, uploadDate: new Date().toLocaleString() };
      setUploadedFiles((prevFiles) => [...prevFiles, newFile]);
      setFile(null); // Clear the file input after uploading
    }
  };

  return (
    <div className="file-upload p-4 bg-neutral-focus rounded-lg shadow-lg shadow-cyan-500/50">
      <h3 className="text-xl font-bold text-gray-200 mb-4">Upload Files</h3>
      <form onSubmit={handleFileUpload}>
        <input type="file" onChange={handleFileChange} className="file-input file-input-bordered w-full mb-4" />
        <button type="submit" className="btn bg-cyan-400 hover:bg-cyan-500 text-white w-full">Upload</button>
      </form>
      <h4 className="mt-4 text-gray-300">Uploaded Files:</h4>
      <ul className="list-disc pl-5 text-gray-200">
        {uploadedFiles.map((file, index) => (
          <li key={index}>
            {file.fileName} <span className="text-sm text-gray-400">(Uploaded: {file.uploadDate})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileUpload;