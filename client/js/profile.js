
Template.profile.helpers({
  create: function(){
    Meteor.currentUser().val();
    

  },
  rendered: function(){

  },
  destroyed: function(){

  },
});

Template.profile.events({
  "click #foo": function(event, template){

  }
});
