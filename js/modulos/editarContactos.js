app.controller('EditarController',  function($scope,$http,$location,$routeParams,contactosService) {
	$scope.ListaPrecios=[{id:1,nombre:'General'},];
	//console.log("llego"+$routeParams.idContact);

	$http.post('controller.php', { metodo : 'consultarContacto',contactoId:$routeParams.idContact}).then(function successCallback(response){
		$scope.contacto=response.data;
		$scope.contacto.type=contactosService.convertipoArrayaObjeto(response.data.type);
	});
	
	$scope.editarContacto=function(){
		if($scope.editarContactoForm.$valid){

			$scope.contacto.type=contactosService.convertipoObjetoAarray($scope.contacto.type);
			var tipo=$scope.contacto.type;

			$http.post('controller.php', { metodo : 'editarContacto',contacto:$scope.contacto}).then(function successCallback(response){
				alert("Contacto editado correctamente");
				$scope.contacto.type=contactosService.convertipoArrayaObjeto(tipo);
				
			});
		}else
			alert("El formulario no ha sido diligenciado correctamente");
	}

	$scope.regresar=function(){
		$location.path('listar');
	}
});


