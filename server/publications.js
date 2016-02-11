
//handles publishing Feeds from followed users
Meteor.publishComposite('feeds', function(username) {
  return {
    find: function() {
      // Find the current user's following users
      return Relationships.find({ follower: username });
    },
    children: [{
      find: function(relationship) {
        // Find feeds from followed users
        return Feeds.find({user: relationship.following});
      }
    }]
  }
});

Meteor.publish('ownFeeds', function(username) {
  return Feeds.find({user: username});
});


Meteor.publish('users', function(username) {
  return Meteor.users.find({}, {
    fields: { 'username': 1 },
    limit: 100
  });
});

Meteor.publish('followings', function(username) {
  return Relationships.find({ follower: username });
});

Meteor.publish('followers', function(username) {
  return Relationships.find({ following: username });
});
