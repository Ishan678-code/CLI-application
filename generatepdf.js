const fs = require('fs');
const pdfdocument = require('pdfkit')
const { download } = require('./download.js')

const jsonData = require('./downloaded-file.json')

download();

function generatePDF(jsonData) {
    const doc = new pdfdocument();
    doc.pipe(fs.createWriteStream('Resume.pdf'))

    doc.font('Helvetica-Bold').fontSize(18).text(jsonData.name);
    doc.font('Helvetica-Bold').fontSize(18).text(jsonData.email);
    doc.font('Helvetica-Bold').fontSize(18).text(jsonData.phone);

    doc.fontSize(18).text('Skills:');
    jsonData.skills.forEach(skill => doc.font('Helvetica').fontSize(16).text(skill));

    doc.fontSize(18).text('Education:');
    jsonData.education.forEach(edu => {
        doc.font('Helvetica-Bold').fontSize(16).text(`${edu.school_name} (${edu.year})`);
        doc.font('Helvetica').fontSize(14).text(`- ${edu.level}, ${edu.title}`);
    });

    doc.fontSize(18).text('Experiences:');
    jsonData.experiences.forEach(exp => {
        doc.font('Helvetica-Bold').fontSize(16).text(`${exp.position} at ${exp.company}`);
        doc.font('Helvetica').fontSize(14).text(`- ${exp.work_year || 'Present'}`);
        doc.font('Helvetica').fontSize(14).text(`- Duties: ${exp.duties.join(', ')}`);
    });

    doc.end();
    




}
generatePDF(jsonData)

module.exports = { generatePDF };