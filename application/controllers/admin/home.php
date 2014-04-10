<?php if (!defined('BASEPATH')) exit('No direct script access allowed');


class Home extends Admin_Controller
{
	public function __construct()
	{
		parent::__construct();
		$this->auth->restrict();
	}//end __construct()

    public function index()
    {
        Template::redirect(SITE_AREA.'/content');
        Template::render();
    }//end index()



}//end class