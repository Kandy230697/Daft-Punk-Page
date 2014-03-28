$(function(){
	$('footer .logos').load('logos_footer.html');

	$.get('usuario.json', function(info){
		var avatar = new Image();
		avatar.src = info.avatar;
		avatar.title = info.nombre+' '+info.apellido;

		$('#Avatar').append(avatar);
	})
});

var base_url = "http://query.yahooapis.com/v1/public/yql?";

function obtenerGeoInfo(lat, longi){
	var query = 'SELECT * FROM geo.placefinder WHERE text="'+lat+','+longi+'" AND gflags="R"';
	query = encodeURIComponent(query);

	$.ajax({
		url: base_url+"q="+query,
		dataType : 'jsonp',
		jsonpCallback: 'procesarGeoInfo',
		data: {
			format: 'json'
		}

	});

}

function procesarGeoInfo(datos){
	console.log(datos);
	var res = datos.query.results.Result;
	var barrio = res.neighborhood;
	var ciudad = res.city;
	var pais = res.country;

	$('#geo')
		.prepend('<p><strong>'+barrio+'</strong><br>'+ciudad+', '+pais+'</p>');
}



