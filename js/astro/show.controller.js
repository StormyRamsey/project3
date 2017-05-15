"use strict";

(function(){
  angular
    .module("goldie_nauts")
    .controller("AstroShowController", [
      "AstroFactory",
      "$stateParams",
      "$anchorScroll",
      AstroShowControllerFunction
    ])


  function AstroShowControllerFunction(AstroFactory, $stateParams, $anchorScroll) {
    this.astro = AstroFactory.get({id: $stateParams.id})
    $anchorScroll()
    console.log(this.astro)
  }

})();
