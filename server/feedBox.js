//insert feed on backend
Meteor.methods({
  insertFeed: function(feed) {
    if (Meteor.user()) {
      Feeds.insert({
        message: feed,
        user: Meteor.user().username,
        timestamp: new Date()
      });
    }
  }
});
