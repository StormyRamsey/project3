"use strict";

(function(){
  angular
    .module("goldie_nauts")
    .factory("AstroFactory", [
      "$resource",
      AstroFactoryFunction
    ])

  function AstroFactoryFunction($resource) {
    return $resource("#", {}, {
      update: {method: "PUT"}
    });
  }

})();
