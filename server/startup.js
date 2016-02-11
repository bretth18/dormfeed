//calls relationships to be loaded on server startup
Meteor.startup(function () {
  Relationships._ensureIndex({follower: 1, following: 1}, {unique: 1});
});
