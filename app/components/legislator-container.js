import Ember from 'ember';

export default Ember.Component.extend({
  activeLegislator: null,
  sponsoredBills: null,
  actions: {
    showLegislator(legislator) {
      this.set("activeLegislator", legislator);
      var url = 'https://congress.api.sunlightfoundation.com/bills/search?sponsor_id=' + legislator.bioguide_id + '&per_page=5&apikey=20a6df84a0644ffd8281c431f6c623bd';
      var that = this; //binding
      return Ember.$.getJSON(url).then(function(responseJSON) {
        return responseJSON.results;
      }).then(function(results) {
        return that.set('sponsoredBills', results);
      });
    }
  }
});
