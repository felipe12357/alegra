app.controller('EditarController',  function($scope,$http,$location,$routeParams) {
	$scope.ListaPrecios=[{id:1,nombre:'General'},];
	//console.log("llego"+$routeParams.idContact);

	$http.post('controller.php', { metodo : 'consultarContacto',contactoId:$routeParams.idContact}).then(function successCallback(response){
		$scope.contacto=response.data;

		//$scope.contacto.type.client=true;
		for(var a=0; a<response.data.type.length; a++){
			var tipo=response.data.type[a];
			if(tipo=='provider')
				$scope.contacto.type.provider=true;
			if(tipo=='client')
				$scope.contacto.type.client=true;
		}
	});
	$scope.editarContacto=function(){
		if($scope.editarContactoForm.$valid){
			var tipo=[];
			if(typeof($scope.contacto.type)!=="undefined"){
				if($scope.contacto.type.client==true)
					tipo.push("client");
				if($scope.contacto.type.provider==true)
					tipo.push("provider");

				$scope.contacto.type=tipo;
			}

			$http.post('controller.php', { metodo : 'editarContacto',contacto:$scope.contacto}).then(function successCallback(response){
				alert("Contacto editado correctamente");
				
				for(var a=0; a<tipo.length;a++){
					if(tipo[a]=="client")
						$scope.contacto.type.client=true;

					if(tipo[a]=="provider")
						$scope.contacto.type.provider=true;
				}
			});
		}else
			alert("El formulario no ha sido diligenciado correctamente");
	}

	$scope.regresar=function(){
		$location.path('listar');
	}
});