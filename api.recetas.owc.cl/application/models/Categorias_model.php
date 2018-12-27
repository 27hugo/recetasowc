<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Categorias_model extends CI_Model{
    
    public function __construct(){
        parent::__construct();
    }
    public function get($cat_id = null){
        if (!is_null($cat_id)) {
            $query = $this->db->select('*')->from('categorias')->where('cat_id', $cat_id)->get();
            if ($query->num_rows() === 1) {
                return $query->row_array();
            }

            return null;
        }
        
        $query = $this->db->select('*')->from('categorias')->order_by('cat_nombre','ASC')->get();
        if ($query->num_rows() > 0) {
            return $query->result_array();
        }
    	
        return null;
    }
    public function getIdByName($cat_nombre){
        $query = $this->db->select('cat_id')->from('categorias')->where('cat_nombre', $cat_nombre)->get();
        if ($query->num_rows() === 1) {
            return $query->row_array();
        }
        return null;
    }


}
