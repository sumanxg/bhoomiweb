<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends CI_Controller {


	public function __construct()
	{
		parent::__construct();
		$this->load->model('login_model');
	}

	
	public function ValidateLogin()
	{

		echo "testlogin";
		
		$this->load->library('form_validation');
		$this->form_validation->set_rules('username', 'Username', 'required');
		$this->form_validation->set_rules('password', 'Password', 'required');
		if($this->form_validation->run()){
			if($this->input->is_ajax_request()){
				$username = $this->input->post('username');
				$password = $this->input->post('password');
				$check = $this->login_model->login_user($username,hash('sha256', $password));
				if($check){
					$this->session->set_userdata('admin_user_id', $check['user_id']);
					$this->session->set_userdata('admin_user_profile', $check);
					$redirect = base_url('dashboard');

					echo json_encode(array('status' => true, 'message' => 'Login sucessfully please wait...', 'link' => $redirect));
				}
				else{
					echo json_encode(array('status' => false, 'message' => 'Wrong username or password'));
				}
			}
			else{
				echo json_encode(array('status' => false, 'message' => 'Unauthorised Access'));
			}
		}
		else{
			$validation = $this->form_validation->error_array();
			echo json_encode(array('status' => false, 'message' => implode(',',$validation)));
		}
	}

	public function Logout()
	{
		$this->session->sess_destroy();
		redirect('login');
	}
}
