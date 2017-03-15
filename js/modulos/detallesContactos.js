app.controller('detallesContactoController',  function($scope,$http,$location,$routeParams,contactosService) {
	$scope.ListaPrecios=[{id:1,nombre:'General'},];
	//console.log("llego"+$routeParams.idContact);

	$http.post('controller.php', { metodo : 'consultarContacto',contactoId:$routeParams.idContact}).then(function successCallback(response){
		$scope.contacto=response.data;
		$scope.contacto.type=contactosService.convertipoArrayaObjeto(response.data.type);
		//console.log($scope.contacto.type);
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