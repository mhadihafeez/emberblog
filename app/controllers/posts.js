import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    deletePost(id) {
      this.store.findRecord('post', id).then(function(post) {
        post.deleteRecord();
        post.save();

      });
    }
  }
});