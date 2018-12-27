<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require_once APPPATH . '/libraries/REST_Controller.php';


class Ingredientes extends REST_Controller{
	
    public function __construct(){
        parent::__construct();
        $this->load->model('ingredientes_model');
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json");
    	header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    	header("Access-Control-Allow-Headers: Access-Control-Allow-Origin, Origin, Content-Type, Content-Length, Accept-Encoding");
    	if ("OPTIONS" === $_SERVER['REQUEST_METHOD'] ){
    		die();
    	}
    }

    public function index_get(){
        $ingredientes = $this->ingredientes_model->get();
        if (!is_null($ingredientes)) {
            $this->response($ingredientes, REST_Controller::HTTP_OK); 
        } else {
            $this->response(array('error' => 'No hay ingredientes en la base de datos.'), 404);
        }
    }

    public function search_get($id){
		if(!$id){
			$this->response(array('error' => 'No se definido el ingrediente a buscar.'),400);
		}
		$ingrediente = $this->ingredientes_model->get($id);
		if(!is_null($ingrediente)){
			$this->response(array('response' => $ingrediente) , 200);
		}else{
			$this->response(array('error' => 'Ingrediente no encontrado.'),404);
		}
    }

    public function add_post(){
		$ingrediente = array (
			'ing_nombre' => $this->post('ing_nombre')
		);
		if (!$this->post('ing_nombre')) {
			$this->response ( array('error' => 'No se han definido todos los datos para los ingredientes.') , 400) ;
		}else{
			$status = $this-> ingredientes_model->save( $ingrediente );
			if ( $status == null ) {
				$this->response ( array ('response' => 'No se ha agregado el ingrediente.') , 400) ;
			}
			$this->response( array('response' => 'Ingrediente agregado.') , 200) ;
   		}
    }

    public function update_put (){
		$ingrediente = array (
			'ing_nombre' => $this->post('ing_nombre')	
		);
		if (!$this->put('ing_nombre')) {
			$this->response(array('error' => 'No se han definido todos los datos para el ingrediente.'),400);
		}else{
			$status = $this->ingredientes_model->update($ingrediente);
			if ( is_null ( $status ) ) {
				$this->response( array ( 'response' => 'No se ha actualizado el ingrediente.') , 400) ;
			}
			$this->response ( array ('response' => 'Ingrediente actualizado.') , 200) ;
		}
	}

	public function delete_delete ($id){
		if(!$id){
			$this->response(null,400);
		}
		$status = $this->ingredientes_model->delete( $id ) ;
		if (!is_null($status)){
			$this->response( array( 'response' => 'Ingrediente eliminado.') , 200) ;
		} else {
			$this->response( array( 'error' , 'Ingrediente no eliminado.') , 400);
		}
	}

}
