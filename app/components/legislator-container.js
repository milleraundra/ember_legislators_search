import Ember from 'ember';

export default Ember.Component.extend({
  activeLegislator: null,
  actions: {
    showLegislator(legislator) {
      this.set("activeLegislator", legislator);
    }
  }
});
