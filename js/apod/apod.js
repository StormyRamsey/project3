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

  function ApodFactoryFunction($resource) {
    return $resource("https://api.nasa.gov/planetary/apod?api_key=hOi55EciImK9E7aiGCxIx9ElgNt6eAllgigvfkQP");
  }

  function ApodIndexControllerFunction(ApodFactory) {
      this.apod = ApodFactory.get();
      this.hey = "ehiow"
      console.log(this.apod)
  }

})();
