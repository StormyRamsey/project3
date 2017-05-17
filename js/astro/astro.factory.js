"use strict";

(function(){
  angular
    .module("goldie_nauts")
    .factory("AstroFactory", [
      "$resource",
      AstroFactoryFunction
    ])

  function AstroFactoryFunction($resource) {
    return $resource("https://whispering-badlands-37063.herokuapp.com/astros/:id.json", {}, {
      update: {method: "PUT"}
    });
  }

})();
