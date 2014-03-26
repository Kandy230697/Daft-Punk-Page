var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#url'),
	$autor = $('#autor'),
	$button = $('#mostrar_form'),
	$list = $('#Contenido'),
	$aside = $('#no_Relevante'),
	$post = $('.Item').first();

localStorage.autosave = "1";

if (localStorage.getItem('autosave')){ 
	$titulo.val(sessionStorage.getItem('titulo'));
	$url.val(sessionStorage.getItem('url'));
	$autor.val(sessionStorage.getItem('autor'));
}

var id = setInterval(function(){
	sessionStorage.setItem('titulo', $titulo.val());
	sessionStorage.setItem('url', $url.val());
	sessionStorage.setItem('autor', $autor.val());
}, 1000); //CADA SEGUNDO REVISA NUESTRO FORMULARIO Y LO QUE HAY EN LOS INPUTS

function mostrarOcultarFormulario() {
	$form.slideToggle();
	$list.slideToggle();
	$aside.slideToggle();
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
	mostrarOcultarFormulario();
	$titulo.val("");
	$url.val("");
	$autor.val("");
	$clone.fadeIn();
	return false;
}

//EVENTOS
$button.click( mostrarOcultarFormulario );
$form.on('submit', agregarPost);

