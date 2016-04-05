import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    stateSearch() {
      var params = {
        state: this.get('state').toUpperCase()
      };
      this.sendAction('stateSearch', params);
    }
  }
});
