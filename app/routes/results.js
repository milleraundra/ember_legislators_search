import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    var url = 'http://congress.api.sunlightfoundation.com/legislators?state=' + params.state + '&apikey=20a6df84a0644ffd8281c431f6c623bd';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON.results);
      return responseJSON.results;
    });
  }
});
