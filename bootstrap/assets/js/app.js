$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
        });
        
        $("#feedbackBtn").click(() => {
			$("#name").val("")
			$("#email").val("")
			$("#phone").val("")
			$("#message").val("")
			$("#feedbackForm").fadeIn();
			$("#messageSuccess").fadeOut(() => {
				$("#shadow, #modal").fadeIn();
			});
			
        });

        $("#shadow").click(() => {
            $("#shadow, #modal").fadeOut();
		});
		

		const validateFeedbackForm = () => {
			const name = $("#name").val();
			const email = $("#email").val();
			const phone = $("#phone").val();
			const country = $("#country").val();
			const message = $("#message").val();
			let formIsValid = false;

			if(name === ""){
				$("#name").addClass("has-error");
			} else{
				$("#name").removeClass("has-error");
			}

			if(email === ""){
				$("#email").addClass("has-error");
			} else{
				$("#email").removeClass("has-error");
			}

			
			if(phone === ""){
				$("#phone").addClass("has-error");
			} else{
				$("#phone").removeClass("has-error");
			}


			if(message === ""){
				$("#message").addClass("has-error");
			} else{
				$("#message").removeClass("has-error");
			}

			if(name !== "" && email !== "" && phone !== "" && message !== ""){
				return true;
			} else {
				return false;
			}
			//varianta prescurtata
			//return name !== "" && email !== "" && phone !== "" && message !== "";
		}

		$("#sendMessageButton").click(() => {
			if(validateFeedbackForm()){
				//send to backend 
				$("#feedbackForm").fadeOut();
				$("#messageSuccess").fadeIn();
			}
			// else {
			// 	alert("Form error");
			// }
		});


});