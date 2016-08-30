/**
  *
  */


(function() {

  // Helper functions
  function extendObject(obj1, obj2) {
    var key, value;

    for (key in obj2) {
      value = obj2[key];
      if (obj1[key] == null) {
        obj1[key] = value;
      }
    }

    return obj1;
  }

  this.PlaceFlow = (function() {

    // Default values
    PlaceFlow.prototype.defaults = {
      placeFlowClass: "place-flow",
      dataHiRes: "data-hi-res",
      dataLowRes: "data-low-res"
    }

    // Constructor
    function PlaceFlow(options) {

      // Default empty object
      if(!options) {
        options = {};
      }

      // Populate object with any missing default configuration
      this.configuration = extendObject(options, this.defaults)

    }

    // INIT
    PlaceFlow.prototype.init = function() {
      var elems = document.querySelectorAll("." +this.configuration.placeFlowClass), i;

      for (i = 0; i < elems.length; ++i) {
        this.place(elems[i]);
        this.flow(elems[i]);
      }
    }

    // 'Place' the element as a low res image
    PlaceFlow.prototype.place = function(elem) {
      var lowRes = elem.getAttribute(this.configuration.dataLowRes);

      this.setImage(elem, lowRes);
    }

    // 'Flow' the element to the high res image once its loaded
    PlaceFlow.prototype.flow = function(elem) {
      var hiRes = elem.getAttribute(this.configuration.dataHiRes);

      this.setImage(elem, hiRes);
    }

    PlaceFlow.prototype.setImage = function(elem, imageSrc) {
      var image = new Image();

      image.onload = function() {
        elem.style.backgroundImage = "url('" + imageSrc + "')";
      }

      image.src = imageSrc;
    }

    // Return the defined PlaceFlow
    return PlaceFlow

  })();

}).call(this);
