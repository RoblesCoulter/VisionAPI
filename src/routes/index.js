/*jshint esversion: 6 */
'use strict';

const visionRoutes = require('./vision_routes');
module.exports = function(app, db) {
  visionRoutes(app, db);
};