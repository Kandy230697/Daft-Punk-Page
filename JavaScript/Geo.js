$(function(){ //cuando ContentLoad este Listo ! 
	var geo = navigator.geolocation;
	var opciones = {}

	function geo_error(){
		$('#geo').append('<p><strong>Error de Localizacion</strong><br /><a href="index.html">Recargar</a></p><hr />');
	}

	function geo_exito(posicion){
		var lat = posicion.coords.latitude;
		var longi = posicion.coords.longitude;
		var mapa = new Image();
		mapa.src = "http://maps.googleapis.com/maps/api/staticmap?zoom=15&size=300x250&sensor=false&center="+lat+","+longi;
		$('#geo').append(mapa);

		obtenerGeoInfo(lat, longi);
	}

	geo.getCurrentPosition(geo_exito, geo_error, opciones);
});