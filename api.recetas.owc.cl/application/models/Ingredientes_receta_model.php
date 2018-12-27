<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Ingredientes_receta_model extends CI_Model{

    public function __construct(){
        parent::__construct();
    }
    public function get($id = null){
        if (!is_null($id)) {
            $query = $this->db->select('*')->from('ingredientes_receta')->where('rec_id', $id)->get();
            if ($query->num_rows() > 1) {
                return $query->result_array();
            }
            return null;
        }
        $query = $this->db->select('*')->from('ingredientes_receta')->get();
        if ($query->num_rows() > 0) {
            return $query->result_array();
        }
        return null;
    }

    public function save($rec_id, $ingredientes){
        foreach ($ingredientes as $ing) {
            $ingrediente = array(
                'ing_nombre' => $ing, 
                'rec_id' => $rec_id
            );
            $this->db->insert('ingredientes_receta', $ingrediente);
            if($this->db->affected_rows() === 0) {
                return null;
            }
        }
        return true;
    }
}
