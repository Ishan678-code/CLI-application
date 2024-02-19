const fs = require('fs'); 
const { generatePDF } = require('./03.js');

//Basically process is an object in javascript which gives us the information about what is happening inside our system. 
const jsonFile = process.argv[2];
const pdfGeneratorPath = process.argv[3];


if (!jsonFile) {
    console.error('Error: A JSON file must be provided.');
    process.exit(1);
}


if (!pdfGeneratorPath) {
    console.error('Error: Path to PDF generator file must be provided.');
    process.exit(1);
}


fs.readFile(jsonFile, 'utf8', (error, data) => {
    if (error) {
        console.error('Error reading JSON file:', error);
        process.exit(1);
    }



    const jsonData = JSON.parse(data);


    generatePDF(jsonData, pdfGeneratorPath);

});
