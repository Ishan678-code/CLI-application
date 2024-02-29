const fs = require('fs');
const { download } = require('./downloaded.js'); 
const { generatePDF } = require('./resumegenerator.js'); 

function isURL(str) {
    try {
        new URL(str);
        return true;
    } catch (error) {
        return false;
    }
}

const input = process.argv[2];
const outputDirectory = process.argv[3];

if (!input || !outputDirectory) {
    console.error('Error: Input and output directory must be provided.');
    process.exit(1);
}

if (isURL(input)) {
    download(input, (err, data) => {
        if (err) {
            console.error("Error downloading file:", err);
            return;
        }
        generateResume(data, outputDirectory); // Call function to generate resume
    });
} else {
    fs.readFile(input, 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        generateResume(data, outputDirectory); // Call function to generate resume
    });
}

function generateResume(jsonData, outputDirectory) {
    
    const resumeData = JSON.parse(jsonData);
    
    
    generatePDF(resumeData, outputDirectory);
}
