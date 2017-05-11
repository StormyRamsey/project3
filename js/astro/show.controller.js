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
    this.astro = AstroFactory.get({id: $stateParams.id})
    console.log(this.astro)
  }

})();
