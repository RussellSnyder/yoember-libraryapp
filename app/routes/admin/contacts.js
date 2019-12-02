import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('contact');
  },
  actions: {

    deleteContact(contact) {
      this.store.find('contact', contact).then((contact) => {
        let confirmation = confirm('Are you sure?');

        if (confirmation) {
          contact.destroyRecord();
        }
      });
    }
  }
});
