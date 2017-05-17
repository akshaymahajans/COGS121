'use strict';

var hypertrack = require('./testUtils').getSpyableHyperTrack();
var expect = require('chai').expect;

describe('Place Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      hypertrack.places.retrieve('placeID123');
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/api/v1/places/placeID123/',
        data: {},
        headers: {},
      });
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
      hypertrack.places.create({
        action: 'delivery',
        place_id: 'placeID123'
      });
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/api/v1/places/',
        data: {
          action: 'delivery',
          place_id: 'placeID123'
        },
        headers: {},
      });
    });

  });

  describe('list', function() {
    it('Sends the correct request', function() {
      hypertrack.places.list();
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/api/v1/places/',
        data: {},
        headers: {},
      });
    });
  });

  describe('update', function() {
    it('Sends the correct request', function() {
      hypertrack.places.update('placeID123', {action: 'pickup'});
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'PATCH',
        url: '/api/v1/places/placeID123/',
        headers: {},
        data: {action: 'pickup'},
      });
    });
  });

  describe('del', function() {
    it('Sends the correct request', function() {
      hypertrack.places.del('placeID123');
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/api/v1/places/placeID123/',
        headers: {},
        data: {},
      });
    });
  });

});
