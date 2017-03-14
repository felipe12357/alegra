<?php
	$data = json_decode(file_get_contents("php://input"));
	

	$curl = curl_init();

	curl_setopt_array($curl, array(
	    CURLOPT_USERAGENT => 'Codular Sample cURL Request',
	    CURLOPT_HTTPAUTH=>CURLAUTH_BASIC,
	    CURLOPT_USERPWD=>'claveAlegra' //modificada para la publicacion
	));


	if($data->metodo=='listarContactos')
		curl_setopt($curl, CURLOPT_URL, "https://app.alegra.com/api/v1/contacts/"); 

	if($data->metodo=='crearContacto'){
		curl_setopt($curl, CURLOPT_URL, "https://app.alegra.com/api/v1/contacts"); 
		curl_setopt($curl, CURLOPT_POST, true);
		curl_setopt($curl, CURLOPT_POSTFIELDS,json_encode($data->contacto));
		//print_r($data->contacto);
	}
	
	if($data->metodo=='consultarContacto')
		curl_setopt($curl, CURLOPT_URL, "https://app.alegra.com/api/v1/contacts/".$data->contactoId); 

	if($data->metodo=='editarContacto'){
		curl_setopt($curl, CURLOPT_URL, "https://app.alegra.com/api/v1/contacts/".$data->contacto->id);
		curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "PUT"); 
		curl_setopt($curl, CURLOPT_POSTFIELDS,json_encode($data->contacto));
	}


	if($data->metodo=='eliminarContacto'){
		curl_setopt($curl, CURLOPT_URL, "https://app.alegra.com/api/v1/contacts/".$data->contactoId);
		curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "DELETE"); 
	}

	if(!curl_exec($curl)){
	    die('Error: "' . curl_error($curl) . '" - Code: ' . curl_errno($curl));
	}

	curl_close($curl);

?>