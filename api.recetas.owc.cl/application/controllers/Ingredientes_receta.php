<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require_once APPPATH . '/libraries/REST_Controller.php';


class Ingredientes_receta extends REST_Controller{
    
    public function __construct(){
        parent::__construct();
     	$this->load->model('ingredientes_model');
     	$this->load->model('ingredientes_receta_model');
     	header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json");
    	header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    	header("Access-Control-Allow-Headers: Access-Control-Allow-Origin, Origin, Content-Type, Content-Length, Accept-Encoding");
    	if ("OPTIONS" === $_SERVER['REQUEST_METHOD'] ){
    		die();
    	}
    }

    public function index_get(){
        $ingredientes_receta = $this->ingredientes_receta_model->get();
        if (!is_null($ingredientes_receta)) {
            $this->response($ingredientes_receta, REST_Controller::HTTP_OK); 
        } else {
            $this->response(array('error' => 'No hay ingredientes_receta en la base de datos.'), 404);
        }
    }
    public function search_get($rec_id){
        $ingredientes_receta = $this->ingredientes_receta_model->get($rec_id);
        if (!is_null($ingredientes_receta)) {
            $this->response($ingredientes_receta, REST_Controller::HTTP_OK); 

        } else {
            $this->response(array('error' => 'No hay ingredientes_receta en la base de datos.'), 404);
        }
    }

   
}
