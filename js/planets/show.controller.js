"use strict";

(function(){
  angular
    .module("goldie_nauts")
    .controller("PlanetShowController", [
      "PlanetFactory",
      "$stateParams",
      PlanetShowControllerFunction
    ])


  function PlanetShowControllerFunction(PlanetFactory, $stateParams) {
    console.log("PlanetShowControllerFunction")
    this.planet = PlanetFactory.get({id: $stateParams.id})
  }

})();
