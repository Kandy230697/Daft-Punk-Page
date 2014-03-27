$(function(){
	$('footer .logos').load('logos_footer.html');

	$.get('usuario.json', function(info){
		var avatar = new Image();
		avatar.src = info.avatar;
		avatar.title = info.nombre+' '+info.apellido;

		$('#Avatar').append(avatar);
	})
});

var base_url = "http://query/yahooapis.com/v1/public/yql?";

function obtenerGeoInfo(lat, longi){
	var query = 'SELECT * FROM geo.placefinder WHERE text="'+lat+','+longi+'" AND gflags="R"';

	query = encodeURIComponent(query);
	console.log(query);
}