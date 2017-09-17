$(function() {

	var client = ZAFClient.init();
	client.invoke('resize',{width: '100%',height: '465px'});
	
	var clientData = null;
	
	$.getJSON('http://www.mocky.io/v2/59bea3ee260000df00526189',function(data){
		clientData   = data.dados;
		
		var source   = $("#requester-template").html();
		var template = Handlebars.compile(source);
		var html     = template(clientData);
		
		$("#content").html(html);
	});
	
	function getClientInfo(){
		for(var x in clientData.informacoesCadastrais.emails){
			var item = clientData.informacoesCadastrais.emails[x];
			
			if(item.email == clientData.dadosConsulta.emailConsulta){
				return item;
			}			
		}
	}
	
	Handlebars.registerHelper('email', function() {
		return getClientInfo().email;
	});
	
	Handlebars.registerHelper('optin', function() {
		var optin = '';
		
		if(getClientInfo().optin == 'S'){
			optin = 'checked';
		}
		
		return optin;
	});
});