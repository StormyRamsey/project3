"use strict";

(function(){
  angular
    .module("goldie_nauts")
    .factory("PlanetFactory", [
      "$resource",
      PlanetFactoryFunction
    ])

  function PlanetFactoryFunction($resource) {
    return $resource("#", {}, {
      update: {method: "PUT"}
    });
  }

})();
