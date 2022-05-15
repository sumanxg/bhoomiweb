<?php
class Login_model extends CI_Model
{	
	public function login_user($username,$pass){
		$this->db->select("username,name,mobile,user_id,created_date");
		$this->db->where("username",$username);
		$this->db->where("password",$pass);
		$query = $this->db->get('admin_user');
		if ($query->num_rows() > 0){
			$result = $query->row_array();
			// $this->db->where('user_id',$result['id']);
			//$this->db->update('admin_user', array('last_login' => date("Y-m-d h:i:s")));
			return $result;
		}
	}

	public function login_user_id(){
        $login_user_id = $this->session->userdata('admin_user_id');
        return $login_user_id ? $login_user_id : false;
    }
	
	public function get_access_info($login_user_id){
		$this->db->select("username,name,mobile,user_id,created_date");
		$this->db->where("user_id",$login_user_id);
		//$this->db->where("is_active",'1');
		$query = $this->db->get('admin_user');
		// echo $this->db->last_query();
		if ($query->num_rows() > 0)
		{
			$result = $query->row_array();
			return $result;
		}
	}
}

?>