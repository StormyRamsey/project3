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
    this.planet = PlanetFactory.get({id: $stateParams.id})
    console.log(this.planet)
  }

})();
