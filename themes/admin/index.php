<?php if (!defined('BASEPATH')) exit('No direct script access allowed');
/**
 * Author: Keith
 * Email: duyanh980@gmail.com
 * Date: 4/10/14
 * Time: 4:46 PM
 */

echo theme_view('header'); ?>

    <div class="page-content">
        <?php echo Template::content(); ?>
    </div>

<?php echo Assets::js(array(
    'js/jquery-1.9.1.js',
    'js/jquery-migrate-1.2.1.min.js',
    'js/jquery-ui.js',
    'plugin/bootstrap/bootstrap.min.js',
    'plugin/bootstrap-hover-dropdown/bootstrap-hover-dropdown.js',
    'js/html5shiv.js',
    'js/respond.min.js',
    'plugin/metisMenu/jquery.metisMenu.js',
    'plugin/slimScroll/jquery.slimscroll.js',
    'plugin/jquery-cookie/jquery.cookie.js',
    'js/jquery.menu.js',
    'plugin/jquery-pace/pace.min.js',
    'js/main.js',
    'js/holder.js'
)); ?>
<?php echo theme_view('footer'); ?>