'use strict';

var HyperTrackResource = require('../HyperTrackResource');
var hypertrackMethod = HyperTrackResource.method;

module.exports = HyperTrackResource.extend({

  path: 'users/',

  includeBasic: [
    'create', 'list', 'retrieve', 'update', 'del',
  ],

  assign_actions: hypertrackMethod({
    method: 'POST',
    path: '/{id}/assign_actions/',
    urlParams: ['id'],
  }),

  stop_tracking: hypertrackMethod({
    method: 'POST',
    path: '/{id}/stop_tracking/',
    urlParams: ['id'],
  }),

});
