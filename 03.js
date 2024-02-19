const fs = require('fs');
const PDFDocument = require('pdfkit');

function generatePDF(jsonData) {
    const doc = new PDFDocument();
    const outputStream = fs.createWriteStream('output.pdf');

    doc.pipe(outputStream);

    doc.font('Helvetica-Bold').fontSize(24).text(jsonData.name);
    doc.font('Helvetica').fontSize(16).text(`Email: ${jsonData.email}`);
    doc.font('Helvetica').fontSize(16).text(`Phone: ${jsonData.phone}`);

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

    // Finalize the PDF document
    doc.end();

    console.log('PDF generated successfully.');
}

module.exports = { generatePDF };
