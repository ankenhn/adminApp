<?php defined('BASEPATH') || exit('No direct script access allowed');

/**
 * Bonfire
 *
 * An open source project to allow developers get a jumpstart their development of CodeIgniter applications
 *
 * @package   Bonfire
 * @author    Bonfire Dev Team
 * @copyright Copyright (c) 2011 - 2014, Bonfire Dev Team
 * @license   http://opensource.org/licenses/MIT
 * @link      http://cibonfire.com
 * @since     Version 1.0
 * @filesource
 */

/**
 * Base Controller
 *
 * A controller that your controllers can extend.
 *
 * This allows any tasks that need to be performed sitewide to be done in one 
 *
 * @package    Bonfire\Core\Controllers\Base_Controller
 * @author     Bonfire Dev Team
 * @link       http://cibonfire.com/docs/bonfire/bonfire_controllers
 */
class Base_Controller extends CI_Controller
{
	/**
	 * @var string Stores the previously viewed page's complete URL.
	 */
	protected $previous_page;

	/**
	 * @var string Stores the page requested. 
	 *
	 * This will sometimes be different than the previous page if a redirect 
	 * happened in the controller.
	 */
	protected $requested_page;

	/**
	 * @var object Stores the current user's details, if they've logged in.
	 */
	protected $current_user = null;

    /**
     * @var bool If TRUE, this class requires the user to be logged in before
	 * accessing any method.
     */
    protected $require_authentication = false;

    /**
     * Stores a number of items to 'autoload' when the class
     * constructor runs. This allows any controller to easily
     * set items that should always be loaded, but not to
     * force the entire application to autoload it through
     * the config/autoload file.
     *
     * @var array
     */
    protected $autoload = array(
        'libraries' => array(),
        'helpers'   => array(),
        'models'    => array()
    );

	//--------------------------------------------------------------------

	public function __construct()
	{
		parent::__construct();

        // Most likely, the requested page is saved in the $_SESSION here, so, 
		// grab it and make it available to CI's session.
        if (isset($_SESSION['requested_page']) && class_exists('CI_Session')) {
            $this->session->set_userdata(array('requested_page' => $_SESSION['requested_page']));
        }
		$this->autoload_classes();

        if ($this->require_authentication === true) {
            $this->authenticate();
        }

		// Load the lang file here, after the user's language is known
		$this->lang->load('application');

		// Make sure no assets in up as a requested page or a 404 page.
		if ( ! preg_match('/\.(gif|jpg|jpeg|png|css|js|ico|shtml)$/i', $this->uri->uri_string()))
		{
			$this->previous_page = $this->session->userdata('previous_page');
			$this->requested_page = $this->session->userdata('requested_page');
		}

	}//end __construct()

	//--------------------------------------------------------------------

	/**
	 * If the Auth lib is loaded, it will set the current user, since users
	 * will never be needed if the Auth library is not loaded. By not requiring
	 * this to be executed and loaded for every command, we can speed up calls
	 * that don't need users at all, or rely on a different type of auth, like
	 * an API or cronjob.
	 */
	protected function set_current_user()
	{
	}

	//--------------------------------------------------------------------

    /**
     * Performs the authentication of a class. At this point, simply
     * ensures that a user is logged in. Any additional authentication
     * will need to be done during the child classes.
     *
     * By having the authenticaiton handled here, we can call it in the
     * Base_Controller's __construct() method and ensure that our user's
     * chosen languages are used.
     */
    protected function authenticate()
    {
        // Load the Auth library before the parent constructor to ensure
        // the current user's settings are honored by the parent
        $this->load->library('users/auth');

        // Make sure we're logged in.
        $this->auth->restrict();

        $this->set_current_user();
    }

    //--------------------------------------------------------------------

    /**
     * Autoloads any class-specific files that are needed throughout the controller.
     *
     * This is often used by base controllers, but can easily be used to autoload models, etc.
     *
     * @return void
     */
    public function autoload_classes ()
    {
        if (is_array($this->autoload['libraries']) && count($this->autoload['libraries']))
        {
            foreach ($this->autoload['libraries'] as $library)
            {
                $this->load->library($library);
            }
        }

        if (is_array($this->autoload['helpers']) && count($this->autoload['helpers']))
        {
            foreach ($this->autoload['helpers'] as $helper)
            {
                $this->load->helper($helper);
            }
        }

        if (is_array($this->autoload['models']) && count($this->autoload['models']))
        {
            foreach ($this->autoload['models'] as $model)
            {
                $this->load->model($model);
            }
        }
    }

    //--------------------------------------------------------------------

}//end Base_Controller

/* End of file Base_Controller.php */
/* Location: ./application/core/Base_Controller.php */
