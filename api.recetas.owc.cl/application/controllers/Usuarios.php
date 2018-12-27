<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require_once APPPATH . '/libraries/REST_Controller.php';

class Usuarios extends REST_Controller{

    public function __construct(){
        parent::__construct();
        $this->load->model('usuarios_model');
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json");
        header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
        header("Access-Control-Allow-Headers: Access-Control-Allow-Origin, Origin, Content-Type, Content-Length, Accept-Encoding");
        if ("OPTIONS" === $_SERVER['REQUEST_METHOD'] ){
            die();
        }
    }

    public function index_get(){
        $usuarios = $this->usuarios_model->get();
        if (!is_null($usuarios)) {
            $this->response($usuarios, REST_Controller::HTTP_OK); 
        } else {
            $this->response(array('error' => 'No hay usuarios en la base de datos.'), 404);
        }
    }

    public function search_get($user_id){
		if(!$user_id){
			$this->response(array('error' => 'No se definido el usuario a buscar.'),400);
		}
		$usuario = $this->usuarios_model->get($user_id);
		if(!is_null($usuario)){
			$this->response($usuario , 200);
		}else{
			$this->response(array('error' => 'Usuario no encontrada.'),404);
		}
    }

    public function validate_post(){
        $user_data = array(
            'username' => $this->post('username'),
            'password' => $this->post('password')
        );
        if($user_data['username'] == null || $user_data['password'] == null){
            $this->response('Verifique los datos antes de continuar.',400);
        }
        $usuario = $this->usuarios_model->validate($user_data);
        if(!is_null($usuario)){
            $usuario = array(
                'usuario' => $usuario,
                'token' => 'a5X8G3d6fgR27qY2i8Uiy7uhG'
            );
            $this->response($usuario , 200);
        }else{
            $this->response('El usuario y/o contraseña no coinciden.',404);
        }    
    }
    public function index_post(){
	   $user_data = array(
	       'adm_rut' => $this->post('adm_rut'),
	       'adm_nombre' => $this->post('adm_nombre'),
	       'adm_apellido' => $this->post('adm_apellido'),
	       'adm_correo' => $this->post('adm_correo'),
	       'adm_password' => $this->post('adm_password'),
            'adm_nivel_permiso' => $this->post('adm_nivel_permiso')
	   );
	   $status = $this->usuarios_model->save( $user_data );
	   if(!is_null($status)){
	       $this->response(array('response' => 'Usuario creado.'), 200);
	   }else{
		  $this->response('Ocurrio un error al crear el usuario', 400);
	   }
    }

    public function index_put(){
	   $user = array(
	       'adm_rut' => $this->put('adm_rut'),
	       'adm_correo' => $this->put('adm_correo'),
	       'adm_password' => $this->put('adm_password')
	   );
	   $status = $this->usuarios_model->update( $user);
       if(!is_null($status)){
	       $this->response(array('response' => 'Usuario actualizado') , 200);
	   }else{
            $this->response('Ocurrio un error al actualizar el usuario', 400);
	   }
    }
}
