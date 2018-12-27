<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Recetas_model extends CI_Model{

    public function __construct(){
        parent::__construct();
    }

    public function get($id = null){
        if (!is_null($id)) {
            $query = $this->db->select('*')->from('recetas')->where('rec_id', $id)->get();
            if ($query->num_rows() === 1) {
                return $query->row_array();
            }

            return null;
        }
        
        $query = $this->db->select('*')->from('recetas')->order_by('rec_nombre','ASC')->get();
        if ($query->num_rows() > 0) {
            return $query->result_array();
        }
    	
        return null;
    }
    
    public function getFechasRecetas(){
        $query = $this->db->query('SELECT DATE(rec_fecha_creacion) as fecha FROM recetas GROUP BY fecha;');
        if ($query->num_rows() > 0) {
            return $query->result_array();
        }        
        return null;
    }

    public function getByCategory($cat_id = null){
        if (!is_null($cat_id)) {
            $query = $this->db->select('*')->from('recetas')->where('rec_categoria', $cat_id)->get();
            if ($query->num_rows() > 0) {
                return $query->result_array();
            }
            return null;
        }
    }
    
    public function getIdReceta($rec_nombre){
        $query = $this->db->select('rec_id')->from('recetas')->where('rec_nombre', $rec_nombre)->get();
        if ($query->num_rows() > 0  ) {
            return $query->row_array();
        }
        return null;
    }

    public function getRecent($limit){
        $query = $this->db->select('*')->from('recetas')->limit($limit)->order_by("rec_fecha_creacion","DESC")->get();
        if ($query->num_rows() > 0) {
            return $query->result_array();
        }
        return null;
    }

	public function save ( $receta ){
		$this->db->insert('recetas', $receta ) ;
		if($this->db->affected_rows() === 1) {
			return true;
		}
		return null;
	}

	public function update ( $receta ){
		$this->db->replace('recetas' , $receta ) ;
		if($this->db->affected_rows() === 2){
		  return true;
		}
		return null;
	}

	public function delete ( $id ){
		$this->db->where('rec_id',$id)->delete('recetas');
		if($this->db->affected_rows() > 0){
			return true;
		}
		return null;
	}

}
