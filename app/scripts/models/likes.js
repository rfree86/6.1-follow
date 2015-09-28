var Pagebutton = Backbone.Model.extend({
  defaults: {
    likecount: 0
  },
  newlikes: function(newlikes) {
    this.set('likecount', this.get('likecount') + 1);
  }
});

module.exports = Pagebutton;
