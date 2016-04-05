import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    stateSearch(params) {
      this.transitionTo('results', params.state);
    }
  }
});
