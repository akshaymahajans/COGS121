HyperTrack Node Bindings
==========================
[![Build Status](https://travis-ci.org/hypertrack/hypertrack-node.svg)](https://travis-ci.org/hypertrack/hypertrack-node/)
[![Coverage Status](https://coveralls.io/repos/github/hypertrack/hypertrack-node/badge.svg?branch=master)](https://coveralls.io/github/hypertrack/hypertrack-node?branch=master)
[![npm version](https://badge.fury.io/js/hypertrack.svg)](https://badge.fury.io/js/hypertrack)
[![Slack Status](http://slack.hypertrack.io/badge.svg)](http://slack.hypertrack.io)

A javascript wrapper for the [HyperTrack api](http://docs.hypertrack.io).

Installation
------------
```
npm install hypertrack
```

Usage
------

You'll need your hypertrack secret key. You can find this from your account page. To start using, you can do the following:

```javascript
var hypertrack = require('hypertrack')('<YOUR HYPERTRACK SECRET KEY>');
// hypertrack.{ RESOURCE_NAME }.{ METHOD_NAME }
```

Every resource method accepts an optional callback as the last argument:

```javascript
hypertrack.users.create(
    { name: 'Tapan Pandita', phone: '+16502469293' },
    function(err, user) {
        err; // null if no error occurred
        user; // the created user object
    }
);
```

Additionally, every resource method returns a promise, so you don't have to use the regular callback. E.g.

```javascript
// Create a new customer and then a new destination for that customer:
hypertrack.users.create({
  name: 'Tapan Pandita',
  phone: '+16502469293'
}).then(function(user) {
  hypertrack.users.assign_actions(user.id, {"action_ids": ["123e4567-e89b-12d3-a456-426655440000"]})
}).catch(function(err) {
  // Deal with an error
});
```

Documentation
-------------

For detailed documentation of the methods available, please visit the official [HyperTrack API documentation](http://docs.hypertrack.com).

Testing
-------
Run the tests using [`npm`](https://www.npmjs.com/):

```bash
$ npm install
$ npm test
```
