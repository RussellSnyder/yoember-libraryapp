import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    navBarClicked(target) {
      // Do not collapse on desktop (i.e. if the button navbar toggle is hidden)
      if (Ember.$('button.navbar-toggle').is(':hidden')) {
        return;
      }
      // Do not collapse if target is a sub menu
      if (Ember.$(target).hasClass('dropdown-toggle')) {
        return;
      }
    
      Ember.$('.navbar-collapse').collapse('hide');
    }
  }
});
