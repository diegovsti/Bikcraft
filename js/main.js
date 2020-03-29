// scripts dos comentários dos clientes

	$(".rslides").responsiveSlides({
	  auto: true,             // Boolean: Animate automatically, true or false
	  speed: 500,            // Integer: Speed of the transition, in milliseconds
	  timeout: 5000,          // Integer: Time between slide transitions, in milliseconds
	});


// script do slide do portifolio

	$(".rslides_portifolio").responsiveSlides({
	  auto: true,             // Boolean: Animate automatically, true or false
	  speed: 500,            // Integer: Speed of the transition, in milliseconds
	  timeout: 5000,          // Integer: Time between slide transitions, in milliseconds
	  pager: true,           // Boolean: Show pager, true or false
	});


// Script da animação do conteúdo

	Visibility.onVisible(function(){
		// animação da página principal
		setTimeout(function () {
			$(".introducao h1").addClass("animated fadeInDown");
		}, 500);

		setTimeout(function () {
			$(".introducao blockquote").addClass("animated fadeInDown");
		}, 1000);

		setTimeout(function () {
			$(".introducao .btn").addClass("animated fadeInDown");
		}, 1500);

		setTimeout(function () {
			$(".animar").addClass("animated fadeInDown");
		}, 2000);

		// animação da introdução interna das páginas
		setTimeout(function () {
			$(".introducao-interna h1").addClass("animated fadeInDown");
		}, 500);

		setTimeout(function () {
			$(".introducao-interna p").addClass("animated fadeInDown");
		}, 1000);

				setTimeout(function () {
			$(".animar-interno").addClass("animated fadeInDown");
		}, 1500);
	});


	// Scripts do formulário

	$('.formphp').on('submit', function() {
	var emailContato = "suporte@dssystemtech.com"; // Escreva aqui o seu e-mail

	var that = $(this),
			url = that.attr('action'),
			type = that.attr('method'),
			data = {};
	
	that.find('[name]').each(function(index, value) {
		var that = $(this),
				name = that.attr('name'),
				value = that.val();
				
		data[name] = value;
	});
	
	$.ajax({
		url: url,
		type: type,
		data: data,
		success: function(response) {
		
			if( $('[name="leaveblank"]').val().length != 0 ) {
				$('.formphp').html("<div id='form-erro'></div>");
				$('#form-erro').html("<span>Falha no envio!</span><p>Tente novamente, ou enviar direto para o e-mail " + emailContato + " </p>")
				.hide()
				.fadeIn(1500, function() {
				$('#form-erro');
				});
			} else {
			
				$('.formphp').html("<div id='form-send'></div>");
				$('#form-send').html("<span>Mensagem enviada!</span><p>Mensagem enviada com sucesso. Em breve eu entro em contato com você. Abraços.</p>")
				.hide()
				.fadeIn(1500, function() {
				$('#form-send');
				});
			};
		},
		error: function(response) {
			$('.formphp').html("<div id='form-erro'></div>");
			$('#form-erro').html("<span>Falha no envio!</span><p>Tente novamente, ou enviar direto para o e-mail " + emailContato + " </p>")
			.hide()
			.fadeIn(1500, function() {
			$('#form-erro');  
		});
		}
	});
	
	return false;
});