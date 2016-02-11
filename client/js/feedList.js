Template.feedList.helpers({
  'feedMessage': function() {
    return Feeds.find({}, { sort: {timestamp: -1}, limit: 10 });
  }
});

Template.feedList.onCreated(function() {
  if (Meteor.user()) {
    this.subscribe('feeds', Meteor.user().username);
    this.subscribe('ownFeeds', Meteor.user().username);
  }
});
