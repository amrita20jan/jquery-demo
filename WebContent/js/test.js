//To load the page
/*$(document).ready(function(){
        $("#btnjson").click(function(){
        	$("#div1").load("home.html");
        });
});
*/

//for simultaneous request
$(document).ready(function(){
    $("#btnjson").click(function(){
    	
    	var dataRequest = $.ajax({ type: 'GET', url: 'http://localhost:8080/testapp/test'});
    	var htmlRquest = $.get("home.html");
    	$.when(dataRequest, htmlRquest).done(function(data, html){
    		console.log(data, html);
    		data = data[0];
    		html = html[0];
    		/*$("#div1").html(html);
    		$('#main').html(data);*/    		
    
    		$("#div1").html(data);
    		$('#main').html(html);  
    		
    		
    	});
 
//for one by one request    	
    	
    	/*$("#div1").load("home.html", function (){
    		console.log('Page');
            $.ajax({
                type: 'GET',
                url: 'http://localhost:8080/testapp/test',
                success: function(data) {
                $('#main').html(data);
                console.log('data');
                //$("#div1").load("home.html");
                }
            });    		
    	});*/
    	

});
});


