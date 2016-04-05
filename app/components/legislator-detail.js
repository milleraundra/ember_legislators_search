import Ember from 'ember';

export default Ember.Component.extend({
  fullName: Ember.computed('legislator.first_name', 'legislator.last_name', function() {
    return this.get('legislator.first_name') + " " + this.get('legislator.last_name');
  }),
  sponsoredBills: null,
  actions: {
    getBills(legislatorId) {
      var url = 'https://congress.api.sunlightfoundation.com/bills/search?sponsor_id=' + legislatorId + '&apikey=20a6df84a0644ffd8281c431f6c623bd';
      var that = this; //binding
      return Ember.$.getJSON(url).then(function(responseJSON) {
        return responseJSON.results;
      }).then(function(results) {
        return that.set('sponsoredBills', results);
      });
        // };
        // this.set('sponsoredBills', apiFunction(url));
        // console.log("hello", this.get('sponsoredBills'));
    }
  }
});
