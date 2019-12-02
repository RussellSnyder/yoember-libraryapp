import Controller from '@ember/controller';
import { computed, observer } from '@ember/object';
import { empty } from '@ember/object/computed';
import { match, not } from '@ember/object/computed';

export default Controller.extend({
  headerMessage: 'Comming Soon',

  fullName: computed('firstName', 'lastName', function() {
    return `${this.firstName} ${this.lastName}`;
  }),

  emailAddress: '',
  isValid: match('emailAddress', /^.+@.+\..+$/),
  isDisabled: not('isValid'),

  actions: {
    saveInvitation() {
      const email = this.get('emailAddress');

      const newInvitation = this.store.createRecord('invitation', { email });
      newInvitation.save().then(response => {
        this.set('responseMessage', `Thank you! We saved your email address with the following id: ${response.get('id')}`);
        this.set('emailAddress', '');
      });
    }
  }

});