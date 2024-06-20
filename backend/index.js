const express = require('express');
const multer = require('multer');
const fs = require('node:fs');
const sharp = require('sharp');
const path = require('path');
const archiver = require('archiver');
const storageStrategy = multer.memoryStorage();
const upload = multer({ storage: storageStrategy });
const app = express();
const winston = require('winston');
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

//NORMAL UPLOAD
app.post('/image/single', upload.single('image'), async (req, res) => {
    //console.log(req.file);
    const processedImage = sharp(req.file.buffer);
    const resizedImageBuffer = await processedImage.toBuffer();
    saveImage(req.file, resizedImageBuffer);

    res.send('Done');
})

//RESIZE
app.post('/image/resize/:width/:height', upload.single('image'), async (req, res) => {
    const { width, height } = req.params;
    const parsedWidth = parseInt(width, 10);
    const parsedHeight = parseInt(height, 10);
    if (isNaN(parsedWidth) || isNaN(parsedHeight)) {
        return res.status(400).send('Width and height must be valid numbers');
    }

    const processedImage = sharp(req.file.buffer);
    const resizedImage = processedImage.resize(parsedWidth, parsedHeight, { fit: "contain", background: "white" });
    const resizedImageBuffer = await resizedImage.toBuffer();
    saveImage(req.file, resizedImageBuffer);

    res.send('Done');

})

//BLACK AND WHITE
app.post('/image/black&white', upload.single('image'), async (req, res) => {
    //console.log(req.file); 
    const processedImage = sharp(req.file.buffer);
    const resizedImageBuffer = await processedImage.greyscale().toBuffer();
    saveImage(req.file, resizedImageBuffer);

    res.send('Done');

})

//INVERT
app.post('/image/invert', upload.single('image'), async (req, res) => {
    const processedImage = sharp(req.file.buffer);
    const resizedImageBuffer = await processedImage.negate().toBuffer();
    saveImage(req.file, resizedImageBuffer);

    res.sendFile(req.file.originalname, { root: './uploads/' })
    console.log('DONE');

})

//RETURNS AN IMAGE
app.get('/images', (req, res) => {
    res.sendFile('test2.jpg', { root: './uploads/' })
});

//RETURNS A JSON OF NAMES
app.get('/images/countAll', (req, res) => {
    const all = [];
    fs.readdir('./uploads', (err, files) => {
        files.forEach(file => {
            all.push(file);
        })
        const jsonString = JSON.stringify(all);
        res.send(jsonString);
    })
});


// //TESTING
// app.get('/test', (req, res) => {
//     res.send(JSON.stringify('Working'));
// });

//FUNCTION TO RENAME AN IMAGE TO ITS ORIGINAL NAME
function saveImage(file, fileBuffer) {
    const newPath = `./uploads/${file.originalname}`;
    fs.writeFileSync(newPath, fileBuffer);
    return newPath;
}

//RETURNS A ZIP OF ALL IMAGES
app.get('/images/All', (req, res) => {
    const imageFiles = [];
    fs.readdir('./uploads', (err, files) => {
        files.forEach(file => {
            imageFiles.push(file);
        })
        const zip = archiver('zip');
        res.attachment('images.zip');

        imageFiles.forEach(file => {
            zip.file(`./uploads/${file}`, { name: file });
        });
        zip.pipe(res);
        zip.finalize();
    })

});

app.listen(4000, () => {
    console.log('Server listening on port 4000');

});