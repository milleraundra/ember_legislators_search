import config from '../config/environment';
import Ember from 'ember';

export default Ember.Component.extend({
  activeLegislator: null,
  sponsoredBills: null,
  totalPages: null,
  // totalPagesArray: createPagesArray(this.totalPages)
  actions: {
    showLegislator(legislator) {
      this.set("activeLegislator", legislator);
      var key = config.myApiKey;
      var url = 'https://congress.api.sunlightfoundation.com/bills/search?sponsor_id=' + legislator.bioguide_id + '&per_page=5&page=1&apikey=' + key;
      var that = this; //binding
      return Ember.$.getJSON(url).then(function(responseJSON) {
        that.set('totalPages', Math.ceil(responseJSON.count/5));//gets count of number of pages to paginate across for all results
        return responseJSON.results;
      }).then(function(results) {
        return that.set('sponsoredBills', results);
      });
    },
    // createPagesArray(totalPages) {
    //   for (var i = 0; i < array.length; i++) {
    //     array[i]
    //   }
    // }

  }
});

//on button click, pass in new number


// showSponsorPage(pageNumber) {
//   page: pageNumber ? pageNumber : 1,
//   var url = 'https://congress.api.sunlightfoundation.com/bills/search?sponsor_id=' + legislator.bioguide_id + '&per_page=5&page=' + this.page + '&apikey=' + key;
//   var that = this; //binding
//   return Ember.$.getJSON(url).then(function(responseJSON) {
//     return responseJSON.results;
//   }).then(function(results) {
//     return that.set('sponsoredBills', results);
//   })
// }
