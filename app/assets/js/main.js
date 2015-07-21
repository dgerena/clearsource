$("document").ready(function(){
	var dom = {
		"prevSignup": $("#prevSignup"),
		'confirmPassword': $('#signup [name="confirmPassword"]'),
		'password': $('#signup [name="password"]')
	};
	dom.prevSignup.click(function(){
		console.log("clickety clack Im a computer",dom.password.val(),dom.confirmPassword.val());
		if(dom.password.val() === dom.confirmPassword.val()){
			dom.prevSignup.parents("form").submit();
		}else{
			dom.password.parent().addClass("has-error");
			dom.confirmPassword.parent().addClass("has-error");
		}
	})
});