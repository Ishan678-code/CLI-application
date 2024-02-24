const fs = require('fs');
const { generatePDF } = require('./generatepdf.js');
const { download } = require('./download.js'); 


const url = process.argv[2]; 
const pdfGeneratorDir = process.argv[3]; 


if (!url || !pdfGeneratorDir) {
    console.error('Error: URL and PDF generator directory must be provided.');
    process.exit(1);
}



