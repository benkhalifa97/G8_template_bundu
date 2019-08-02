$(document).ready(function(){
	function showMessage(id){
		
		if($(".details_message").attr("id") == id && $(".details_message").hasClass("fade"))
			$(".details_message").removeClass("fade");
		else if($(".details_message").attr("id") == id )
			$(".details_message").addClass("fade");
	}
	$(document).on("click",".message",function (e) {
		var id = $(this).attr('id');
		showMessage(id);
	});
	$(document).on("click",".sms_envoyes",function (e) {
		$("#title").load("messages_envoyes.html#titre_sms");
	});
});