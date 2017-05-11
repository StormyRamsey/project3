"use strict";

(function(){
  angular
    .module("goldie_nauts")
    .controller("AstroShowController", [
      "AstroFactory",
      "$stateParams",
      AstroShowControllerFunction
    ])


  function AstroShowControllerFunction(AstroFactory, $stateParams) {
    console.log("AstroShowControllerFunction")
    this.astro = AstroFactory.get({id: $stateParams.id})
  }

})();
