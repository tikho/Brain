Ideas = new Mongo.Collection('ideas');


if (Meteor.isServer) {
  Ideas.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });

  // Ideas.deny({
  //   insert: function (userId, doc) {
  //     return true;
  //   },

  //   update: function (userId, doc, fieldNames, modifier) {
  //     return true;
  //   },

  //   remove: function (userId, doc) {
  //     return true;
  //   }
  // });
}
