"use strict";

(function(){
  angular
    .module("goldie_nauts")
    .factory("AstroFactory", [
      "$resource",
      AstroFactoryFunction
    ])

  function AstroFactoryFunction($resource) {
    return $resource("http://localhost:3000/astros/:id.json", {}, {
      update: {method: "PUT"}
    });
  }

})();
