
app.controller('TablaController',  function($scope,$http,$location) {

		$scope.orden="name";
		$scope.reverse=false;
		$scope.filtrar=false;


	    $scope.currentPage = 0;
	    $scope.pageSize = 10;
      	$scope.pages = [];
      	$scope.pagInicial;
      	$scope.pagFin;

		$http.post('controller.php', { metodo : 'listarContactos'}).then(function successCallback(response){
			$scope.contactos=response.data;
			configPages();
			//$scope.total= Math.ceil($scope.contactos.length / $scope.numPerPage);
		});

		//Funcion que reorganiza la tabla segun lo sea enviado como paramentro
		$scope.OrdenarTabla=function(val){
			if(val==$scope.orden){
				$scope.reverse=!$scope.reverse;
			}else
				$scope.reverse=false

			$scope.orden  = val; 
		}

		$scope.CrearContacto=function(){
			$location.path('crearContacto');
		}

		$scope.EditarContacto=function(id){
			$location.path('editarContacto/'+id);
		}

		$scope.DetallesContacto=function(id){
			$location.path('detallesContacto/'+id);
		}


		$scope.EliminarContacto=function(id){


			$http.post('controller.php', { metodo : 'eliminarContacto',contactoId:id}).then(function successCallback(response){
				alert("contacto Eliminado");
				for(var a=0; a<$scope.contactos.length; a++){
						if(id==$scope.contactos[a].id)
							$scope.contactos.splice(a,1);
				}
				configPages();
			});
		}


		$scope.Filtrar=function(){
			$scope.filtrar=!$scope.filtrar;
		}

		configPages = function() {
	        $scope.pages.length = 0;
	        $scope.totalPaginas=$scope.contactos.length/$scope.pageSize;

	        for(var a=0; a<$scope.totalPaginas;a++){
	        	$scope.pages.push({
            		no: a+1
          		});
	        }
	        $scope.setPage(1);
	    };

	    $scope.setPage = function(index) {
	    	//console.log(index);
	        $scope.currentPage = index - 1;
	        $scope.pagInicial= $scope.currentPage*$scope.pageSize;
      		$scope.pagFin=parseInt($scope.pagInicial+$scope.pageSize-1);
	    };

})

