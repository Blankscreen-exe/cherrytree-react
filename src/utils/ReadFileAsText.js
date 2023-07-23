export default function readFileAsText(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      // Event listener for when the file reading is complete
      reader.onload = (event) => {
        const fileData = event.target.result;
        const fileContentAsString = fileData.toString();
        resolve(fileContentAsString);
      };
  
      // Event listener for error handling
      reader.onerror = (error) => {
        reject(error);
      };
  
      // Read the file as text
      reader.readAsText(file);
    });
  }