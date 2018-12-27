<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Upload_model extends CI_Model
{
    public function __construct()
    {
        parent::__construct();
        $this->load->library('upload');
    }
    public function upload($data, $imagename) {
        if (preg_match('/^data:image\/(\w+);base64,/', $data, $type)) {
            $data = substr($data, strpos($data, ',') + 1);
            $type = strtolower($type[1]); // jpg, png, gif
            if (!in_array($type, [ 'jpg', 'jpeg', 'gif', 'png' ])) {
                throw new \Exception('invalid image type');
                return null;
            }
            $data = base64_decode($data);
            if ($data === false) {
                return null;
                throw new \Exception('base64_decode failed');
            }
        } else {
            return null;
            throw new \Exception('did not match data URI with image data');
        }
        file_put_contents(FCPATH.'/uploads/'.$imagename.'.'.$type, $data);
        /*$txt= fopen('C:\Users\fer\Desktop\public_html\api_recetasowc\uploads\opcion.txt', 'w') or die ('Problemas al crear el archivo');
        #  Se establecen los datos que va a conterner el archivo
        fwrite($txt, FCPATH);
        #  Se hace el ciere para no sobre escribir datos 
        fclose($txt);*/
    return true;
}


}
