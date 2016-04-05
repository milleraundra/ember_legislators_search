import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    var key = config.myApiKey;
    var url = 'https://congress.api.sunlightfoundation.com/legislators?state=' + params.state + '&apikey=' +key;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
