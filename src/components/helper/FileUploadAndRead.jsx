import React from 'react'
import PropTypes from 'prop-types'
import ObjectDisplay from '../../utils/ObjectDisplay';

function FileUploadAndRead(props) {
  // Function to handle file input change event
  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];

    if (!file) {
      // No file selected
      return;
    }

    try {
      const fileContent = await readFileAsText(file);
      console.log(fileContent);
      // You can use the fileContent here or set it in the component's state
    } catch (error) {
      console.error('Error reading the file:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileInputChange} />
      {file && <ObjectDisplay data={data}/>}
    </div>
  );
}

FileUploadAndRead.propTypes = {}

export default FileUploadAndRead
