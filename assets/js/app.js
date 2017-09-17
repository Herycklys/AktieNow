$(function() {
	var client = ZAFClient.init();
	client.invoke('resize', { width: '100%', height: '465px' });
	showInfo();
  
	function showInfo() {
		var requester_data = {
			'name'         : 'Jane Doe',
			'tags'         : ['tag1', 'tag2'],
			'created_at'   : 'November 20, 2014',
			'last_login_at': 'June 27, 2016'
		};

		var source = $("#requester-template").html();
		var template = Handlebars.compile(source);
		var html = template(requester_data);
		$("#content").html(html);
	}
});