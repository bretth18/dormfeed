
Template.feedBox.helpers({
  charCount: function() {
    return 140 - Session.get('numChars');
  },

  charClass: function() {
    if (Session.get('numChars') > 140) {
      return 'errCharCount';
    } else {
      return 'charCount';
    }
  },

  disableButton: function() {
    if (Session.get('numChars') <= 0 ||
        Session.get('numChars') > 140 ||
        !Meteor.user()) {
      return 'disabled';
    }
  }
});

Template.feedBox.events({
  'input #feedText': function(){
    Session.set('numChars', $('#feedText').val().length);
  },

  'click button': function() {
    var feed = $('#feedText').val();
    $('#feedText').val("");
    Session.set('numChars', 0);
    Meteor.call('insertFeed', feed);
  }
});

Template.feedBox.onRendered(function () {
  Session.set('numChars', 0);
});
