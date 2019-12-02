import Controller from '@ember/controller';
import { match, not, notEmpty, gte, and } from '@ember/object/computed';

export default Controller.extend({
  emailAddress: '',
  message: '',

  isEmailValid: match('emailAddress', /^.+@.+\..+$/),
  isMessageFilled: notEmpty('message'),
  isMessageLongEnough: gte("message.length", 5),
  isMessageValid: and('isMessageFilled', 'isMessageLongEnough'),
  isDisabled: not('isEmailValid') && not('isMessageValid'),

  actions: {
    sendMessage() {
      const email = this.get('emailAddress');
      const message = this.get('message');

      const newMessage = this.store.createRecord('contact', { email, message });
      newMessage.save().then(response => {
        this.set('responseMessage', `Thank you! We've sent your message`);
        this.set('emailAddress', '');
        this.set('message', '');
      });
    }
  }
});