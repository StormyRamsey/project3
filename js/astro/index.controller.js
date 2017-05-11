"use strict";

(function(){
  angular
    .module("goldie_nauts")
    .controller("AstroIndexController", [
      "AstroFactory",
      AstroIndexControllerFunction
    ])


  function AstroIndexControllerFunction(AstroFactory) {
    console.log("AstroIndexControllerFunction")
    this.astros = AstroFactory.query()
  }

})();
