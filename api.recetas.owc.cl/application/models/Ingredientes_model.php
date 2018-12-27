<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Ingredientes_model extends CI_Model{
	
    public function __construct(){
        parent::__construct();
    }
    public function get($id = null){
        if (!is_null($id)) {
            $query = $this->db->select('*')->from('ingredientes')->where('ing_id', $id)->get();
            if ($query->num_rows() === 1) {
                return $query->row_array();
            }
            return null;
        }
        $query = $this->db->select('*')->from('ingredientes')->get();
        if ($query->num_rows() > 0) {
            return $query->result_array();
        }
        return null;
    }

	public function save ( $ingrediente ){
		$this->db->insert('ingredientes', $ingrediente ) ;
		if($this->db->affected_rows() === 1) {
			return true;
		}
		return null;
	}

	public function update ( $ingrediente ){
		$this->db->replace('ingredientes' , $ingrediente ) ;
		if($this->db->affected_rows() === 2){
		return true;
		}
		return null;
	}

	public function delete ( $id ){
		$this->db->where('emp_id',$id)->delete('ingredientes');
		if($this->db->affected_rows() > 0){
			return true;
		}
		return null;
	}

}
