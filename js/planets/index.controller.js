"use strict";

(function(){
  angular
    .module("goldie_nauts")
    .controller("PlanetIndexController", [
      "PlanetFactory",
      PlanetIndexControllerFunction
    ])


  function PlanetIndexControllerFunction(PlanetFactory) {
    this.planets = PlanetFactory.query()
        console.log(this.astros)
  }

})();
