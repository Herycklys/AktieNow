$(function() {

	var client = ZAFClient.init();
	client.invoke('resize',{width: '100%',height: '465px'});
	
	$.getJSON('http://www.mocky.io/v2/59bea3ee260000df00526189',function(data){
		var source = $("#requester-template").html();
		var template = Handlebars.compile(source);
		var html = template(data.dados);
		
		console.log(data.dados.beneficio[0])
		
		$("#content").html(html);
	})
});