<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require_once APPPATH . '/libraries/REST_Controller.php';

class Recetas extends REST_Controller{

    public function __construct(){
        parent::__construct();
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
        header("Content-Type: application/json");
    	header("Access-Control-Allow-Headers: Access-Control-Allow-Origin, Origin, Content-Type, Content-Length, Accept-Encoding");
        $this->load->model('recetas_model');
        $this->load->model('ingredientes_model');
        $this->load->model('ingredientes_receta_model');
        $this->load->model('usuarios_model');
        $this->load->model('upload_model');
        $this->load->model('categorias_model');
    	if ("OPTIONS" === $_SERVER['REQUEST_METHOD'] ){
    		die();
    	}
    }

    public function index_get(){
        $recetas = $this->recetas_model->get();
        if (!is_null($recetas)) {
            $this->response($recetas, REST_Controller::HTTP_OK); 
        } else {
            $this->response(array('error' => 'No hay recetas en la base de datos.'), 404);
        }
    }

    public function search_get($rec_id){
		if(!$rec_id){
			$this->response(array('error' => 'No se definido la receta a buscar.'),400);
		}
		$receta = $this->recetas_model->get($rec_id);
		$ingredientes_receta = $this->ingredientes_receta_model->get($rec_id);
		$user_details = $this->usuarios_model->get($receta['adm_rut']);
		$receta = array(
        	'rec_details' => $receta,
        	'rec_ingredientes' => $ingredientes_receta,
        	'rec_usuarios' => $user_details
        );
        $this->response($receta , 200);
    }

    public function category_get($cat_id){
		if(!$cat_id){
			$this->index_get();
		}
		$recetas = $this->recetas_model->getByCategory($cat_id);
		if(!is_null($recetas)){
			$this->response($recetas , 200);
		}else{
			$this->response(array('error' => 'No hay recetas en esta categoria.'),404);
		}
    }
	public function recent_get($limit){
		if(!$limit){
			$this->response(null, 400);
		}
		$recetas = $this->recetas_model->getRecent($limit);
		if(!is_null($recetas)){
			$this->response($recetas , 200);
		}else{
			$this->response(array('error' => 'No hay recetas.'),404);
		}
    }

	public function fechasRecetas_get(){
		$recetas = $this->recetas_model->getFechasRecetas();
		if(!is_null($recetas)){
			$this->response($recetas , 200);
		}else{
			$this->response(array('error' => 'No hay recetas.'),404);
		}
    }

    public function index_post(){
    	date_default_timezone_set('America/Santiago');
    	$hora_actual = date('Y-m-d H:i:s', time());
    	$imagen =  $this->post('rec_image');
    	$pos  = strpos($imagen, ';');
		$extension = explode('/', mime_content_type($imagen))[1];
		
		$receta = array (
			'rec_imageurl' => base_url().'uploads/'.$this->post('rec_nombre').'.'.$extension,
			'rec_nombre' => $this->post('rec_nombre'),
			'rec_descripcion' => $this->post('rec_descripcion'),
			'rec_porciones' => $this->post('rec_porciones'),
			'rec_duracion' => $this->post('rec_duracion'),
			'rec_categoria' => $this->post('rec_categoria'),
			'rec_preparacion' => $this->post('rec_preparacion'),
			'adm_rut' => $this->post('adm_rut'),
			'rec_fecha_creacion' => $hora_actual,
			'rec_ultima_modif' => null	
		);
		$ingredientes = $this->post('ingredientes');
		if (!$this->post('rec_nombre')) {
			$this->response ( array('error' => 'No se han definido todos los datos para la receta.') , 400) ;
		}else{
			$categoria_id = $this->categorias_model->getIdByName($receta['rec_categoria']);
			$receta['rec_categoria'] = $categoria_id['cat_id'];
			$status = $this->recetas_model->save( $receta );
			
			$receta_id = $this->recetas_model->getIdReceta($receta['rec_nombre']);
			
			$status2 = $this->ingredientes_receta_model->save($receta_id['rec_id'], $ingredientes );
			if ( $status == null || $status2 == null) {
				$this->response ( array ('response' => 'No se ha agregado la receta.') , 400) ;
			}
			if( !$this->upload_model->upload($imagen, $receta['rec_nombre'])){
				$this->response(array('response' => 'Error subiendo imagen' ), 500);
			}
			$this->response( array('response' => 'Receta agregada.') , 200) ;
   		}
    }

    public function update_put (){
		$receta = array (
			'rec_imageurl' => $this->post('rec_imageurl'),
			'rec_nombre' => $this->post('rec_nombre'),
			'rec_descripcion' => $this->post('rec_descripcion'),
			'rec_porciones' => $this->post('rec_porciones'),
			'rec_duracion' => $this->post('rec_duracion'),
			'rec_preparacion' => $this->post('rec_preparacion'),
			'adm_rut' => $this->post('adm_rut'),
			'rec_fecha_creacion' => $this->post('rec_fecha_creacion'),
			'rec_ultima_modificacion' => $this->post('rec_ultima_modificacion')	
		);
		if (!$this->put('rec_nombre')) {
			$this->response(array('error' => 'No se han definido todos los datos para la refceta.'),400);
		}else{
			$status = $this->recetas_model->update($receta);
			if ( is_null ( $status ) ) {
				$this->response( array ( 'response' => 'No se ha actualizado la receta.') , 400) ;
			}
			$this->response ( array ('response' => 'Receta actualizada.') , 200) ;
		}
   }

	public function delete_delete($id){
		if(!$id){
			$this->response(null,400);
		}
		$status = $this->recetas_model->delete( $id ) ;
		if (!is_null($status)){
			$this->response( array( 'response' => 'Receta eliminada.') , 200) ;
		} else {
			$this->response( array( 'error' , 'Receta no eliminada.') , 400);
		}
	}

}
