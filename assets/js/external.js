var myExtObject = (function() {

  return {
    func1: function() {
      alert('function 1 called');
    },
    closePB: function() {
      //alert('function 2 called');
      //$('.opacity-overlay').trigger('click');
    	document.getElementById("soap-popupbox").click();
    }
  }

})(myExtObject||{})


var webGlObject = (function() { 
  return { 
    init: function() { 
      alert('webGlObject initialized');
    } 
  } 
})(webGlObject||{})