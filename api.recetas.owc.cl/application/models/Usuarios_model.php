<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Usuarios_model extends CI_Model
{
    public function __construct()
    {
        parent::__construct();
    }
    public function get($user_id = null)
    {
        if (!is_null($user_id)) {
            $query = $this->db->select('*')->from('administradores')->where('adm_rut', $user_id)->get();
            if ($query->num_rows() === 1) {
                return $query->row_array();
            }
            return null;
        }
        
        $query = $this->db->select('*')->from('administradores')->get();
        if ($query->num_rows() > 0) {
            return $query->result_array();
        }
    	
        return null;
    }
    public function validate($user){
        $query = $this->db->select('*')->from('administradores')->where('adm_rut', $user['username'])->where('adm_password', $user['password'])->get();
        if ($query->num_rows() === 1) {
                return $query->row_array();
        }
        $query = $this->db->select('*')->from('administradores')->where('adm_correo', $user['username'])->where('adm_password', $user['password'])->get();
        if ($query->num_rows() === 1) {
                return $query->row_array();
        }
        return null;
    }
    public function save($user){
	   $query = $this->db->insert('administradores', $user);
	   if($query){
	       return true;
	   }
	   return false;
    }

    public function update($user){
	   $this->db->where('adm_rut', $user['adm_rut']);
	   $query = $this->db->update('administradores', $user);
       if($query){
            return true;
	   }
	   return false;
    }
}
