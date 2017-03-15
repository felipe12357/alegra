app.factory("contactosService",function(){
	var tipo=[];
	var interfaz={
		convertipoObjetoAarray:function(tipoEnviado){
			var tipo=[];
			if(typeof(tipoEnviado)!=="undefined"){
				if(tipoEnviado.client==true)
					tipo.push("client");
				if(tipoEnviado.provider==true)
					tipo.push("provider");
			}

			return tipo;
		},

		convertipoArrayaObjeto:function(tipoEnviado){
			var tipoObjeto={};
			for(var a=0; a<tipoEnviado.length; a++){
				var tipo=tipoEnviado[a];
				if(tipo=='provider')
					tipoObjeto.provider=true;
				if(tipo=='client')
					tipoObjeto.client=true;
			}

			return tipoObjeto;
		}
	}

    return interfaz;
})