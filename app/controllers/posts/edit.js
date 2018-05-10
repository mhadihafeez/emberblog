import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    editPost: function(id) {
      var self = this;
      var title = this.get('model.title');
      var description = this.get('model.description');

      this.store.findRecord('post', id).then(function(post) {
        post.set('title', title);
        post.set('description', description);
        post.save();

        self.transitionToRoute('posts');
      });


    }
  }
});