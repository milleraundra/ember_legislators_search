import config from '../config/environment';
import Ember from 'ember';

export default Ember.Component.extend({
  activeLegislator: null,
  sponsoredBills: null,
  actions: {
    showLegislator(legislator) {
      this.set("activeLegislator", legislator);
      var key = config.myApiKey;
      var url = 'https://congress.api.sunlightfoundation.com/bills/search?sponsor_id=' + legislator.bioguide_id + '&per_page=5&apikey=' + key;
      var that = this; //binding
      return Ember.$.getJSON(url).then(function(responseJSON) {
        return responseJSON.results;
      }).then(function(results) {
        console.log(results);
        return that.set('sponsoredBills', results);
      });
    }
  }
});
