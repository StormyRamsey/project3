"use strict";

(function(){
  angular
    .module("goldie_nauts")
    .factory("PlanetFactory", [
      "$resource",
      PlanetFactoryFunction
    ])

  function PlanetFactoryFunction($resource) {
    return $resource("http://localhost:3000/planets/:id", {}, {
      update: {method: "PUT"}
    });
  }

})();
