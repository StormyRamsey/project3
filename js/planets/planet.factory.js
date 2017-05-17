"use strict";

(function(){
  angular
    .module("goldie_nauts")
    .factory("PlanetFactory", [
      "$resource",
      PlanetFactoryFunction
    ])

  function PlanetFactoryFunction($resource) {
    return $resource("https://whispering-badlands-37063.herokuapp.com/planets/:id.json", {}, {
      update: {method: "PUT"}
    });
  }

})();
