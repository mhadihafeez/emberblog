import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createPost() {
      var title = this.get('title');
      var description = this.get('description');

      var newPost = this.store.createRecord('post', {
        title: title,
        description: description
      });

      newPost.save();

      this.setProperties({
        title: '',
        description: ''
      });
    }
  }
});