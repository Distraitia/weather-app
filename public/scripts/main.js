$(document).ready(function() {


	$("#rewards-list").collapse({
  	accordion: true,
  	open: function() {       			
    	this.slideDown(350);
  	},
  	close: function() {
    	this.slideUp(350);
  	}
  });


});