$(function(){
    		$("input").expandable({
	    		width: 350,
	    		duration: 300,
	    		action: function(val){
	    			alert(val);
	    		}
	    	});
    	});