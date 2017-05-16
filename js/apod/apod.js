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
    .controller("ApodIndexController", [
      "ApodFactory",
      ApodIndexControllerFunction
    ])
    .controller("ApodShowController", [
      "ApodFactory",
      "$stateParams",
      ApodShowControllerFunction
    ])

  function ApodFactoryFunction($resource) {
    return $resource("https://api.nasa.gov/planetary/apod?date=:date" + "&api_key=:api_key",
    { api_key: "hOi55EciImK9E7aiGCxIx9ElgNt6eAllgigvfkQP",
      date: "@date"
    });
  }

  function ApodIndexControllerFunction(ApodFactory) {
    this.apod = ApodFactory.get();
    this.newDate = "";
    this.getNewDate = function() {
      this.apod = ApodFactory.get({ date: this.newDate });
    }
  }

  function ApodShowControllerFunction(ApodFactory, $stateParams) {
    console.log($stateParams)
    this.apod = ApodFactory.get({ date: $stateParams.pic_date });
  }


})();
