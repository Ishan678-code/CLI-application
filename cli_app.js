const fs = require('fs');
const { generatePDF } = require('./resumegenerator.js');
const { download } = require('./download.js'); 


const url = process.argv[2]; 
const resumeGeneratorDir = process.argv[3]; 


if (!url || !resumeGeneratorDir) {
    console.error('Error: URL and PDF generator directory must be provided.');
    process.exit(1);
}



