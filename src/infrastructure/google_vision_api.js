/*jshint esversion: 6 */
'use strict';

const vision = require('@google-cloud/vision');

// Constants
const API_URI = 'https://vision.googleapis.com/v1/';

const config = {
    keyFilename: './config/vision-keyfile.json'
};
const client = new vision.ImageAnnotatorClient(config);

exports.labelsData = (image_url) => {
    let labels = client.labelDetection(image_url).then(results => {
        return results[0].labelAnnotations;
    }).catch(err => {
        return err;
    });
    return labels;
};

exports.facesData = (image_url) => {
    let faces = client.faceDetection(image_url).then(results => {
        return results[0].faceAnnotations;
    }).catch(err => {
        return err;
    });
    return faces;
};

exports.propertiesData = (image_url) => {
    let properties = client.imageProperties(image_url).then(results => {
        return results[0].imagePropertiesAnnotation;
    }).catch(err => {
        return err;
    });
    return properties;
};

exports.cropHintsData = (image_url) => {
    let cropHints = client.cropHints(image_url).then(results => {
        return results[0].cropHintsAnnotation;
    }).catch(err => {
        return err;
    });
    return cropHints;
}
