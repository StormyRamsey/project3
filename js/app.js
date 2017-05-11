"use strict";

(function(){
  angular
  .module("goldie_nauts",[
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
function RouterFunction($stateProvider){
  $stateProvider
  .state("astroIndex", {
    url: "/astro",
    templateUrl: "js/astro/index.html",
    controller: "AstroIndexController",
    controllerAs: "vm"
  })
  .state("astroShow",{
    url: "/astros/:id",
    templateUrl: "js/astro/show.html",
    controller: "AstroShowController",
    controllerAs: "vm"
  })
  .state("planetIndex",{
    url: "/planet",
    templateUrl: "js/planets/index.html",
    controller: "PlanetIndexController",
    controllerAs: "vm"
  })
  .state("planetShow",{
  url: "/planet/:id",
  templateUrl: "js/planets/show.html",
  controller: "PlanetShowController",
  controllerAs: "vm"
  })
}

})();
