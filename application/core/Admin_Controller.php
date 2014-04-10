<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

/**
 * Admin Controller
 *
 * This class provides a base class for all admin-facing controllers.
 * It automatically loads the form, form_validation and pagination
 * helpers/libraries, sets defaults for pagination and sets our
 * Admin Theme.
 *
 * @package    Bonfire
 * @subpackage MY_Controller
 * @category   Controllers
 * @author     Bonfire Dev Team
 * @link       http://guides.cibonfire.com/helpers/file_helpers.html
 *
 */
class Admin_Controller extends Authenticated_Controller
{
    protected $pager;
    protected $limit;

    //--------------------------------------------------------------------

    /**
     * Class constructor - setup paging and keyboard shortcuts as well as
     * load various libraries
     *
     */
    public function __construct()
    {
        //$this->autoload['libraries'][] = 'ui/contexts';

        parent::__construct();


        Template::set_theme($this->config->item('template.admin_theme'), $this->config->item('template.default_theme'));
    }//end construct()

    //--------------------------------------------------------------------

}

/* End of file Admin_Controller.php */
/* Location: ./application/core/Admin_Controller.php */