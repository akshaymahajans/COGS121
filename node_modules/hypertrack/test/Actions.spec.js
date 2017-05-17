'use strict';

var hypertrack = require('./testUtils').getSpyableHyperTrack();
var expect = require('chai').expect;

describe('Action Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      hypertrack.actions.retrieve('actionID123');
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/api/v1/actions/actionID123/',
        data: {},
        headers: {},
      });
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
      hypertrack.actions.create({
        action: 'delivery',
        destination_id: 'destinationID123'
      });
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/api/v1/actions/',
        data: {
          action: 'delivery',
          destination_id: 'destinationID123'
        },
        headers: {},
      });
    });

  });

  describe('list', function() {
    it('Sends the correct request', function() {
      hypertrack.actions.list();
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/api/v1/actions/',
        data: {},
        headers: {},
      });
    });
  });

  describe('update', function() {
    it('Sends the correct request', function() {
      hypertrack.actions.update('actionID123', {action: 'pickup'});
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'PATCH',
        url: '/api/v1/actions/actionID123/',
        headers: {},
        data: {action: 'pickup'},
      });
    });
  });

  describe('complete', function() {
    it('Sends the correct request', function() {
      hypertrack.actions.complete('actionID123', {completion_location: {type: 'Point', coordinates: [72, 19]}});
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/api/v1/actions/actionID123/complete/',
        headers: {},
        data: {completion_location: {type: 'Point', coordinates: [72, 19]}},
      });
    });
  });

  describe('cancel', function() {
    it('Sends the correct request', function() {
      hypertrack.actions.cancel('actionID123', {cancelation_time: '2016-03-09T06:00:20.648785Z'});
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/api/v1/actions/actionID123/cancel/',
        headers: {},
        data: {cancelation_time: '2016-03-09T06:00:20.648785Z'},
      });
    });
  });

  describe('del', function() {
    it('Sends the correct request', function() {
      hypertrack.actions.del('actionID123');
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/api/v1/actions/actionID123/',
        headers: {},
        data: {},
      });
    });
  });

});
