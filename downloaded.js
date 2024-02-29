

const https = require('https');
const fs = require('fs');

function download(url, callback) {
    const file = fs.createWriteStream("downloadedData.json");

    https.get(url, response => {
        response.pipe(file);

        file.on("finish", () => {
            file.close(() => {
                console.log("Download complete");
                // Read the downloaded file and pass the data to the callback
                fs.readFile("downloadedData.json", 'utf8', (err, data) => {
                    if (err) {
                        callback(err);
                    } else {
                        callback(null, data);
                    }
                });
            });
        });
    }).on("error", err => {
        fs.unlink("downloadedData.json", () => {
            if (callback) callback(err);
        });
    });
}

module.exports = { download };
