'use strict';

var hypertrack = require('./testUtils').getSpyableHyperTrack();
var expect = require('chai').expect;

describe('User Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      hypertrack.users.retrieve('userID123');
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/api/v1/users/userID123/',
        data: {},
        headers: {},
      });
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
      hypertrack.users.create({
        action: 'delivery',
        user_id: 'userID123'
      });
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/api/v1/users/',
        data: {
          action: 'delivery',
          user_id: 'userID123'
        },
        headers: {},
      });
    });

  });

  describe('list', function() {
    it('Sends the correct request', function() {
      hypertrack.users.list({page_size: 1});
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/api/v1/users/',
        data: {page_size: 1},
        headers: {},
      });
    });
  });

  describe('update', function() {
    it('Sends the correct request', function() {
      hypertrack.users.update('userID123', {action: 'pickup'});
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'PATCH',
        url: '/api/v1/users/userID123/',
        headers: {},
        data: {action: 'pickup'},
      });
    });
  });

  describe('del', function() {
    it('Sends the correct request', function() {
      hypertrack.users.del('userID123');
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/api/v1/users/userID123/',
        headers: {},
        data: {},
      });
    });
  });

  describe('assign_actions', function() {
    it('Sends the correct request', function() {
      hypertrack.users.assign_actions('userID123', {'action_ids': ['actionID123']});
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/api/v1/users/userID123/assign_actions/',
        headers: {},
        data: {'action_ids': ['actionID123']},
      });
    });
  });

  describe('stop_tracking', function() {
    it('Sends the correct request', function() {
      hypertrack.users.stop_tracking('userID123', {});
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/api/v1/users/userID123/stop_tracking/',
        headers: {},
        data: {},
      });
    });
  });

});
