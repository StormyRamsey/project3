"use strict";

(function(){
  angular
    .module("goldie_nauts")
    .factory("ApodFactory", [
      "$resource",
      ApodFactoryFunction
    ])
    .filter("trusted", ["$sce", function ($sce) {
      return function(url) {
        return $sce.trustAsResourceUrl(url);
      };
    }])
    .controller("ApodShowController", [
      "ApodFactory",
      "$stateParams",
      "$state",
      ApodShowControllerFunction
    ])

  function ApodFactoryFunction($resource) {
    return $resource("https://api.nasa.gov/planetary/apod?date=:date" + "&api_key=:api_key",
    { api_key: "hOi55EciImK9E7aiGCxIx9ElgNt6eAllgigvfkQP",
      date: "@date"
    });
  }

  function ApodShowControllerFunction(ApodFactory, $stateParams, $state) {
    this.apod = ApodFactory.get({ date: $stateParams.pic_date });
    this.getNewDate = function() {
      ApodFactory.get({ date: this.newDate }, function(newApod){
        let newDate = newApod.date
        $state.go('apodShow', {pic_date: newDate})
      });
    }
  }


})();
