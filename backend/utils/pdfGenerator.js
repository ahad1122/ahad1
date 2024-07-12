const PDFDocument = require('pdfkit');
const { PassThrough } = require('stream');

function generatePdf(vehicle) {
    return new Promise((resolve, reject) => {
        const doc = new PDFDocument();
        const stream = new PassThrough();
        const buffers = [];

        doc.pipe(stream);
        doc.text(`Complete Name: ${vehicle.completeName}`);
        doc.text(`Email: ${vehicle.email}`);
        doc.text(`Phone Number: ${vehicle.phoneNumber}`);
        doc.text(`Address: ${vehicle.address}`);
        doc.text(`Vehicle Brand: ${vehicle.vehicleBrand}`);
        doc.text(`Chassis Number: ${vehicle.chassisNumber}`);
        doc.end();

        stream.on('data', chunk => buffers.push(chunk));
        stream.on('end', () => resolve(Buffer.concat(buffers)));
        stream.on('error', reject);
    });
}

module.exports = { generatePdf };