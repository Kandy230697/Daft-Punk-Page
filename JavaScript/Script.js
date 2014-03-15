var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#url'),
	$autor = $('#autor'),
	$button = $('#mostrar_form'),
	$list = $('#Contenido'),
	$post = $('.Item').first();


function mostrarFormulario() {
	$form.slideToggle();
	return false;
}

function agregarPost(){
	var autor = $autor.val(),
		url = $url.val(),
		titulo = $titulo.val(),
		$clone = $post.clone();

	$clone.find('.Titulo_Item a')
		.text(titulo)
		.attr('href', url);

	$clone.find('.Autor_Item a')
		.text(autor)


	$clone.hide();
	$list.prepend($clone);
	$clone.fadeIn();
	return false;
}

//EVENTOS
$button.click( mostrarFormulario );
$form.on('submit', agregarPost);

