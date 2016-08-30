(function() {
  this.PlaceFlow = (function() {

    // Default values
    PlaceFlow.prototype.defaults = {
      class: "place-flow",
      dataHiRes: "data-hi-res",
      dataLowRes: "data-low-res"
    }

    // Constructor
    function PlaceFlow(options) {

      // Default empty object
      if(!options) {
        options = {};
      }

    }

    // INIT
    PlaceFlow.prototype.init = function() {
      console.log("Hello, World!");
    }

    // Return the defined PlaceFlow
    return PlaceFlow

  })();

}).call(this);
