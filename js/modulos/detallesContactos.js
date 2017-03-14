app.controller('detallesContactoController',  function($scope,$http,$location,$routeParams) {
	$scope.ListaPrecios=[{id:1,nombre:'General'},];
	//console.log("llego"+$routeParams.idContact);

	$http.post('controller.php', { metodo : 'consultarContacto',contactoId:$routeParams.idContact}).then(function successCallback(response){
		$scope.contacto=response.data;
				
		for(var a=0; a<response.data.type.length; a++){
			var tipo=response.data.type[a];
			if(tipo=='provider')
				$scope.contacto.type.provider=true;
			if(tipo=='client')
				$scope.contacto.type.client=true;
		}
	});
	

	$scope.regresar=function(){
		$location.path('listar');
	}
});

app.filter('checkmark',function(){
	return function(input){
		return input ? '\u2713' : '\u2718';
	};
});

app.filter('sinAsignar',function(){
	return function(input){
		//return input ? '\u2713' : '\u2718';
		if(input!=null)
			return input;
		else
			return "Ninguna";
	};
});