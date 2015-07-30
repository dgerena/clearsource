$.fn.serializeObject=function(){var i={},e=this.serializeArray();return $.each(e,function(){void 0!==i[this.name]?(i[this.name].push||(i[this.name]=[i[this.name]]),i[this.name].push(this.value||"")):i[this.name]=this.value||""}),i};

$("document").ready(function(){
	var dom = {
		"prevSignup": $("#prevSignup"),
		'confirmPassword': $('#signup [name="confirmPassword"]'),
		'password': $('#signup [name="password"]')
	};
	dom.prevSignup.click(function(){
		console.log("clickety clack Im a computer",dom.password.val(),dom.confirmPassword.val());
		$form = dom.prevSignup.parents("form");
		attrs = $form.serializeObject();
		var badattr = true;
		for(var a in attrs){
			if(!attrs[a]){
				badattr = false;
				$('[name="'+a+'"]').parent().addClass("has-error");
			}
		}
		if(dom.password.val() === dom.confirmPassword.val() && badattr){
			$form.submit();
		}
	});
	$.ajax({
		'url':'/public/nav/',
		'method':'GET',
		'success': function(response){
			for(var t=0;t<response.length; t++){
				console.log(response[t].active);
			}
			for(var t=0;t<response.length; t++){
				$("#nav").append('<li><a href="/topic/r/'+response[t]+'">'+response[t]+'</a></li>');
			}
		}
	})
});