<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require_once APPPATH . '/libraries/REST_Controller.php';


class Categorias extends REST_Controller{

    public function __construct(){
        parent::__construct();
        $this->load->model('categorias_model');
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json");
        header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
        header("Access-Control-Allow-Headers: Access-Control-Allow-Origin, Origin, Content-Type, Content-Length, Accept-Encoding");
        if ("OPTIONS" === $_SERVER['REQUEST_METHOD'] ){
            die();
        }
    }

    public function index_get(){
        $categorias = $this->categorias_model->get();
        if (!is_null($categorias)) {
            $this->response($categorias, REST_Controller::HTTP_OK); 
        } else {
            $this->response(array('error' => 'No hay categorias en la base de datos.'), 404);
        }
    }

    public function search_get($cat_id){
		if(!$cat_id){
			$this->response(array('response' => 'No se definido el categoria a buscar.'),200);
		}
		$categoria = $this->categorias_model->get($cat_id);
		if(!is_null($categoria)){
			$this->response($categoria , 200);
		}else{
			$this->response(array('error' => 'categoria no encontrada.'),404);
		}
    }

  

}
