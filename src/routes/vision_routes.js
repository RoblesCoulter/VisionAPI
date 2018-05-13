/*jshint esversion: 6 */
'use strict';

const vision_api = require('../infrastructure/google_vision_api');
const IMAGE_URL = './images/example.png';
module.exports = function(app, db) {
    app.get('/labels', (req, res) => {
        vision_api.labelsData(IMAGE_URL).then(results =>{
            let response = [];
            results.forEach(element => {
                response.push(element.description);
            });
            res.send(response);
        });
        
    });

    app.get('/faces', (req, res) => {
        
        vision_api.facesData(IMAGE_URL).then(results =>{
            let response = {};
            results.forEach((face,i) =>{
                response[i+1] = {
                    'joy': face.joyLikelihood,
                    'anger': face.angerLikelihood,
                    'sorrow': face.sorrowLikelihood,
                    'surprise': face.surpriseLikelihood
                };
            });
            res.send(response);
        });
    });

    app.get('/colors', (req, res) => {
        
        vision_api.propertiesData(IMAGE_URL).then(results =>{
            let response = results.dominantColors.colors;
            res.send(response);
        });
    });

    app.get('/cropHints', (req, res) => {
        
        vision_api.cropHintsData(IMAGE_URL).then(results => {
            let response = {};
            results.cropHints.forEach((hintBounds,hintIndex) => {
                response[hintIndex+1] = hintBounds.boundingPoly.vertices;
            });
            res.send(response);
        });
    });
};
