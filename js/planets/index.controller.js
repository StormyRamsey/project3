"use strict";

(function(){
  angular
    .module("goldie_nauts")
    .controller("PlanetIndexController", [
      "PlanetFactory",
      PlanetIndexControllerFunction
    ])


  function PlanetIndexControllerFunction(PlanetFactory) {
    console.log("PlanetIndexControllerFunction")
    this.astros = PlanetFactory.query()
  }

})();
