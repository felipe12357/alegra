app.controller('CrearController',  function($scope,$http,$location,contactosService) {
	$scope.ListaPrecios=[{id:1,nombre:'General'},];
	/*$scope.TerminosPago=[
		{id:0,nombre:'Vencimiento Manual'},{id:1,nombre:'De contacto'},{id:2,nombre:'8 dias'},{id:3,nombre:'15 dias'},{id:4,nombre:'30 dias'},{id:5,nombre:'60 dias'}
	];*/

	$scope.CrearContacto=function(){

		$scope.contacto.type=contactosService.convertipoObjetoAarray($scope.contacto.type);

		if($scope.crearContactoForm.$valid){
			$http.post('controller.php', { metodo : 'crearContacto',contacto:$scope.contacto}).then(function successCallback(response){
				alert("Contacto creado correctamente");
				$scope.contacto={};
			});
		}else
			alert("El formulario no ha sido diligenciado correctamente");
	}

	$scope.regresar=function(){
		$location.path('listar');
	}
});

