'use strict';

var HyperTrackResource = require('../HyperTrackResource');
var hypertrackMethod = HyperTrackResource.method;

module.exports = HyperTrackResource.extend({

  path: 'actions/',

  includeBasic: [
    'create', 'list', 'retrieve', 'update', 'del',
  ],

  complete: hypertrackMethod({
    method: 'POST',
    path: '/{id}/complete/',
    urlParams: ['id'],
  }),

  cancel: hypertrackMethod({
    method: 'POST',
    path: '/{id}/cancel/',
    urlParams: ['id'],
  }),

});
