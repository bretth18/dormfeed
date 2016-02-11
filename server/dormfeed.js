// //mongodb Collections
// Feeds = new Meteor.Collection("feeds");
//
// //on startup index our followers
// Meteor.startup(function(){
//   Relationships._ensureIndex({follower: 1, following: 1}, {unique: 1});
// });


//publish our feeds
// Meteor.publish('feeds', function() {
//   if (this.userId) {
//     var username = Meteor.users.findOne({_id: this.userId}).username;
//     var currentFollowings = UserUtils.findFollowings(username);
//     return Feeds.find({user: { $in: currentFollowings }});
//   }
// });
//
// //server side validation and insert of Feed
// Meteor.methods({
//   insertFeed: function(feed) {
//     if (Meteor.user()) {
//       Feeds.insert({
//         message: feed,
//         user: Meteor.user().username,
//         timestamp: new Date()
//       });
//     }
//   }
// });
// //recommend users backend, this is how we find recommendedUsers
// Meteor.methods({
//   'recommendUsers': function() {
//     if (Meteor.user()) {
//       var currentFollowings = UserUtils.findFollowings(Meteor.user().username);
//       var recUsers = Meteor.users.find({
//         username: {
//           $nin: currentFollowings
//         }
//       },
//       {
//         fields: {'username': 1},
//         limit: 5
//       }).fetch();
//
//       return recUsers;
//     }
//   }
// });
//
// //follow user backend
// Meteor.methods({
//   'followUser': function(username){
//      Relationships.insert({
//        follower: Meteor.user().username,
//        following: username
//      });
//   }
// });
// //findUser backend
// Meteor.methods({
//   'findUser': function(username) {
//     return Meteor.users.findOne({
//       username: username
//     },
//     {
//       fields: {'username': 1}
//     });
//   }
// });
