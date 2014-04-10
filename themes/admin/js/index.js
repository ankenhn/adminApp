<!DOCTYPE html>
<html lang="en">
<head><title>Dashboard | Dashboard</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewpoint" content="width=device-width, initial-scale=1.0">
    <link href="images/icons/favicon.ico" rel="shortcut icon">
    <!--Loading bootstrap css-->
    <link type="text/css"
          href="http://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,800italic,400,700,800">
    <link type="text/css" rel="stylesheet" href="http://fonts.googleapis.com/css?family=Oswald:400,700,300">
    <link type="text/css" rel="stylesheet"
          href="vendors/jquery-ui-1.10.3.custom/css/ui-lightness/jquery-ui-1.10.3.custom.css">
    <link type="text/css" rel="stylesheet" href="vendors/font-awesome/css/font-awesome.min.css">
    <link type="text/css" rel="stylesheet" href="vendors/bootstrap/css/bootstrap.min.css">
    <!--LOADING SCRIPTS FOR PAGE-->
    <link type="text/css" rel="stylesheet" href="vendors/jquery-news-ticker/jquery.news-ticker.css">
    <link type="text/css" rel="stylesheet" href="vendors/jquery-jvectormap/jquery-jvectormap-1.2.2.css">
    <!--Loading style vendors-->
    <link type="text/css" rel="stylesheet" href="vendors/animate.css/animate.css">
    <link type="text/css" rel="stylesheet" href="vendors/jquery-pace/pace.css">
    <!--Loading style-->
    <link type="text/css" rel="stylesheet" href="css/style.css">
    <link type="text/css" rel="stylesheet" href="css/style-mango.css" id="theme-style">
    <link type="text/css" rel="stylesheet" href="css/vendors.css">
    <link type="text/css" rel="stylesheet" href="css/themes/default.css" id="color-style">
    <link type="text/css" rel="stylesheet" href="css/style-responsive.css">
    <link rel="shortcut icon" href="images/favicon.ico">
</head>
<body>
<div><!--BEGIN TEMPLATE SETTING-->
    <div id="template-setting"><a href="#" data-toggle="dropdown" class="btn-template-setting"><i
            class="fa fa-tint"></i></a>

        <div class="content-template-setting"><h4 class="block-heading">Theme Colors</h4>
            <ul class="color-theme list-unstyled list-inline">
                <li data-style="red" data-hover="tooltip" title="Red" class="red"></li>
                <li data-style="orange" data-hover="tooltip" title="Orange" class="orange"></li>
                <li data-style="green" data-hover="tooltip" title="Green" class="green"></li>
                <li data-style="yellow" data-hover="tooltip" title="Yellow" class="yellow"></li>
                <li data-style="blue" data-hover="tooltip" title="Blue" class="blue"></li>
                <li data-style="violet" data-hover="tooltip" title="Violet" class="violet"></li>
                <li data-style="pink" data-hover="tooltip" title="Pink" class="pink"></li>
                <li data-style="grey" data-hover="tooltip" title="Grey" class="grey"></li>
                <li data-style="default" data-hover="tooltip" title="Dark" class="dark"></li>
                <li data-style="white" data-hover="tooltip" title="White" class="white"></li>
            </ul>
        </div>
    </div>
    <!--END TEMPLATE SETTING--><!--BEGIN TO TOP--><a id="totop" href="#"><i class="fa fa-angle-up"></i></a><!--END BACK TO TOP-->
    <div id="wrapper"><!--BEGIN TOPBAR-->
        <nav id="topbar" role="navigation" style="margin-bottom: 0;" class="navbar navbar-default navbar-static-top">
            <div class="navbar-header">
                <button type="button" data-toggle="collapse" data-target=".sidebar-collapse" class="navbar-toggle"><span
                        class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span
                        class="icon-bar"></span><span class="icon-bar"></span></button>
                <a id="logo" href="index.html" class="navbar-brand">Odin</a></div>
            <div class="topbar-main"><a id="menu-toggle" href="#" class="btn hidden-xs"><i class="fa fa-bars"></i></a>

                <form id="topbar-search" action="" method="" class="hidden-sm hidden-xs">
                    <div class="input-icon right"><a href="#"><i class="fa fa-search"></i></a><input type="text"
                                                                                                     placeholder="Search here..."
                                                                                                     class="form-control"/>
                    </div>
                </form>
                <ul class="nav navbar-top-links navbar-right">
                    <li class="dropdown"><a data-toggle="dropdown" href="#" class="dropdown-toggle"><i
                            class="fa fa-bell fa-fw"></i><span class="badge badge-yellow">3</span></a>
                        <ul class="dropdown-menu dropdown-alerts animated bounceInDown">
                            <li><a href="#"><span class="label label-blue"><i class="fa fa-comment fa-fw"></i></span>New
                                Comment<span class="pull-right text-muted small">4 minutes ago</span></a></li>
                            <li><a href="#"><span class="label label-violet"><i class="fa fa-twitter fa-fw"></i></span>3
                                New Followers<span class="pull-right text-muted small">12 minutes ago</span></a></li>
                            <li><a href="#"><span class="label label-pink"><i class="fa fa-envelope fa-fw"></i></span>Message
                                Sent<span class="pull-right text-muted small">15 minutes ago</span></a></li>
                            <li><a href="#"><span class="label label-green"><i class="fa fa-tasks fa-fw"></i></span>New
                                Task<span class="pull-right text-muted small">18 minutes ago</span></a></li>
                            <li><a href="#"><span class="label label-yellow"><i class="fa fa-upload fa-fw"></i></span>Server
                                Rebooted<span class="pull-right text-muted small">19 minutes ago</span></a></li>
                            <li><a href="#" class="text-right">See all alerts</a></li>
                        </ul>
                    </li>
                    <li class="dropdown"><a data-toggle="dropdown" href="#" class="dropdown-toggle"><i
                            class="fa fa-envelope fa-fw"></i><span class="badge badge-green">7</span></a>
                        <ul class="dropdown-menu dropdown-messages animated bounceInUp">
                            <li><a href="#"><span class="avatar"><img src="http://lorempixel.com/128/128/people/9/"
                                                                      alt=""
                                                                      class="img-responsive img-circle"/></span><span
                                    class="info"><span class="name">Jessica</span><span class="desc">Lorem ipsum dolor sit amet...</span></span></a>
                            </li>
                            <li><a href="#"><span class="avatar"><img src="http://lorempixel.com/128/128/people/9/"
                                                                      alt=""
                                                                      class="img-responsive img-circle"/></span><span
                                    class="info"><span class="name">John Smith<span class="label label-blue pull-right">New</span></span><span
                                    class="desc">Lorem ipsum dolor sit amet...</span></span></a></li>
                            <li><a href="#"><span class="avatar"><img src="http://lorempixel.com/128/128/people/9/"
                                                                      alt=""
                                                                      class="img-responsive img-circle"/></span><span
                                    class="info"><span class="name">John Doe<span class="label label-orange pull-right">10 min</span></span><span
                                    class="desc">Lorem ipsum dolor sit amet...</span></span></a></li>
                            <li><a href="#"><span class="avatar"><img src="http://lorempixel.com/128/128/people/9/"
                                                                      alt=""
                                                                      class="img-responsive img-circle"/></span><span
                                    class="info"><span class="name">John Smith</span><span class="desc">Lorem ipsum dolor sit amet...</span></span></a>
                            </li>
                            <li><a href="#">Read all messages</a></li>
                        </ul>
                    </li>
                    <li class="dropdown"><a data-toggle="dropdown" href="#" class="dropdown-toggle"><i
                            class="fa fa-tasks fa-fw"></i><span class="badge badge-blue">8</span></a>
                        <ul class="dropdown-menu dropdown-tasks animated bounceInDown">
                            <li><a href="#"><span class="task-item">Fix the HTML code<small
                                    class="pull-right text-muted">40% Complete
                            </small></span>

                                <div class="progress progress-sm">
                                    <div role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"
                                         style="width: 40%;" class="progress-bar progress-bar-orange"><span
                                            class="sr-only">40% Complete (success)</span></div>
                                </div>
                            </a></li>
                            <li><a href="#"><span class="task-item">Make a wordpress theme<small
                                    class="pull-right text-muted">60% Complete
                            </small></span>

                                <div class="progress progress-sm">
                                    <div role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                         style="width: 60%;" class="progress-bar progress-bar-blue"><span
                                            class="sr-only">60% Complete (success)</span></div>
                                </div>
                            </a></li>
                            <li><a href="#"><span class="task-item">Convert PSD to HTML<small
                                    class="pull-right text-muted">55% Complete
                            </small></span>

                                <div class="progress progress-sm">
                                    <div role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"
                                         style="width: 55%;" class="progress-bar progress-bar-green"><span
                                            class="sr-only">55% Complete (success)</span></div>
                                </div>
                            </a></li>
                            <li><a href="#"><span class="task-item">Convert HTML to Wordpress<small
                                    class="pull-right text-muted">78% Complete
                            </small></span>

                                <div class="progress progress-sm">
                                    <div role="progressbar" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100"
                                         style="width: 78%;" class="progress-bar progress-bar-yellow"><span
                                            class="sr-only">78% Complete (success)</span></div>
                                </div>
                            </a></li>
                            <li><a href="#">See all tasks</a></li>
                        </ul>
                    </li>
                    <li class="dropdown hi"><a data-toggle="dropdown" href="#" class="dropdown-toggle"><img
                            src="http://lorempixel.com/128/128/people/9/" alt="" class="img-responsive img-circle"/>&nbsp;
                        Jessica
                        &nbsp;<span class="caret"></span></a>
                        <ul class="dropdown-menu dropdown-user pull-right animated bounceInLeft">
                            <li>
                                <div class="navbar-content">
                                    <div class="row">
                                        <div class="col-md-5 col-xs-5"><img
                                                src="http://lorempixel.com/128/128/people/9/" alt=""
                                                class="img-responsive img-circle"/>

                                            <p class="text-center mtm"><a href="#" class="change-avatar">
                                                <small>Change Avatar</small>
                                            </a></p>
                                        </div>
                                        <div class="col-md-7 col-xs-5"><span>Jessica</span>

                                            <p class="text-muted small">example@mail.com</p>

                                            <div class="divider"></div>
                                            <a href="#" class="btn btn-primary btn-sm">View Profile</a></div>
                                    </div>
                                </div>
                                <div class="navbar-footer">
                                    <div class="navbar-footer-content">
                                        <div class="row">
                                            <div class="col-md-6 col-xs-6"><a href="#" class="btn btn-default btn-sm">Change
                                                Password</a></div>
                                            <div class="col-md-6 col-xs-6"><a href="page-lock-screen.html"
                                                                              class="btn btn-default btn-sm pull-right">Sign
                                                Out</a></div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
        <!--BEGIN MODAL CONFIG PORTLET-->
        <div id="modal-config" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" data-dismiss="modal" aria-hidden="true" class="close">&times;</button>
                        <h4 class="modal-title">Modal title</h4></div>
                    <div class="modal-body"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend et
                        nisl eget porta. Curabitur elementum sem molestie nisl varius, eget tempus odio molestie. Nunc
                        vehicula sem arcu, eu pulvinar neque cursus ac. Aliquam ultricies lobortis magna et aliquam.
                        Vestibulum egestas eu urna sed ultricies. Nullam pulvinar dolor vitae quam dictum condimentum.
                        Integer a sodales elit, eu pulvinar leo. Nunc nec aliquam nisi, a mollis neque. Ut vel felis
                        quis tellus hendrerit placerat. Vivamus vel nisl non magna feugiat dignissim sed ut nibh. Nulla
                        elementum, est a pretium hendrerit, arcu risus luctus augue, mattis aliquet orci ligula eget
                        massa. Sed ut ultricies felis.</p></div>
                    <div class="modal-footer">
                        <button type="button" data-dismiss="modal" class="btn btn-default">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        <!--END MODAL CONFIG PORTLET--><!--END TOPBAR--><!--BEGIN SIDEBAR MENU-->
        <nav id="sidebar" role="navigation" class="navbar-default navbar-static-side">
            <div class="sidebar-collapse menu-scroll">
                <ul id="side-menu" class="nav">
                    <li class="clock"><strong id="get-date"></strong>

                        <div class="digital-clock">
                            <div id="getHours" class="get-time"></div>
                            <span>:</span>

                            <div id="getMinutes" class="get-time"></div>
                            <span>:</span>

                            <div id="getSeconds" class="get-time"></div>
                        </div>
                    </li>
                    <li class="sidebar-heading"><h4>Main Menu</h4></li>
                    <li class="active"><a href="index.html"><i class="fa fa-home fa-fw"></i>&nbsp;
                        Dashboard<span class="fa arrow"></span><span class="badge btn-primary">3</span></a>
                        <ul class="nav nav-second-level in">
                            <li class="active"><a href="index.html">General</a></li>
                            <li><a href="dashboard-shopping.html">Shopping Dashboard</a></li>
                            <li><a href="dashboard-blog.html">Blog Dashboard</a></li>
                        </ul>
                    </li>
                    <li><a href="#"><i class="fa fa-laptop fa-fw"></i>&nbsp;
                        Layouts<span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level">
                            <li><a href="layout-left-sidebar.html">Left Sidebar</a></li>
                            <li><a href="layout-right-sidebar.html">Right Sidebar</a></li>
                            <li><a href="layout-boxed.html">Boxed Layout</a></li>
                        </ul>
                    </li>
                    <li><a href="#"><i class="fa fa-bookmark fa-fw"></i>&nbsp;
                        UI Elements<span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level">
                            <li><a href="ui-general.html">General</a></li>
                            <li><a href="ui-buttons.html">Buttons</a></li>
                            <li><a href="ui-typography.html">Typography</a></li>
                            <li><a href="ui-modals.html">Modals</a></li>
                            <li><a href="ui-tabs-accordions-navs.html">Tabs, Accordions & Navs</a></li>
                            <li><a href="ui-sliders.html">Sliders</a></li>
                            <li><a href="ui-nestable-list.html">Nestable List</a></li>
                            <li><a href="ui-icons.html">Icons</a></li>
                            <li><a href="ui-portlets.html">Portlets</a></li>
                        </ul>
                    </li>
                    <li><a href="#"><i class="fa fa-edit fa-fw"></i>&nbsp;
                        Forms<span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level">
                            <li><a href="form-layouts.html">Form Layouts</a></li>
                            <li><a href="form-components.html">Form Components</a></li>
                            <li><a href="form-validation.html">Form Validation</a></li>
                            <li><a href="form-multiple-file-upload.html">Multiple File Upload</a></li>
                            <li><a href="form-dropzone-file-upload.html">Dropzone File Upload</a></li>
                        </ul>
                    </li>
                    <li><a href="#"><i class="fa fa-th-list fa-fw"></i>&nbsp;
                        Tables<span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level">
                            <li><a href="table-basic.html">Basic Tables</a></li>
                            <li><a href="table-responsive.html">Responsive Tables</a></li>
                            <li><a href="table-editable.html">Editable Tables</a></li>
                            <li><a href="table-advanced.html">Advanced Tables</a></li>
                        </ul>
                    </li>
                    <li><a href="#"><i class="fa fa-file-o fa-fw"></i>&nbsp;
                        Pages<span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level">
                            <li><a href="page-signin.html">Sign In</a></li>
                            <li><a href="page-signup.html">Sign Up</a></li>
                            <li><a href="page-lock-screen.html">Lock Screen</a></li>
                            <li><a href="page-invoice.html">Invoice</a></li>
                            <li><a href="page-pricing-table.html">Pricing Tables</a></li>
                            <li><a href="page-fullcalendar.html">Full Calendar</a></li>
                            <li><a href="page-blank.html">Blank</a></li>
                            <li><a href="page-404.html">404 Page</a></li>
                            <li><a href="page-500.html">500 Page</a></li>
                            <li><a href="javascript:void(0)" title="FullScreen" class="btn-fullscreen">Full Screen</a>
                            </li>
                        </ul>
                    </li>
                    <li><a href="#"><i class="fa fa-sitemap fa-fw"></i>&nbsp;
                        Multi-Level Dropdown<span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level">
                            <li><a href="#">Second Level Item</a></li>
                            <li><a href="#">Second Level Item</a></li>
                            <li><a href="#">Third Level<span class="fa arrow"></span></a>
                                <ul class="nav nav-third-level">
                                    <li><a href="#">Third Level Item</a></li>
                                    <li><a href="#">Third Level Item</a></li>
                                    <li><a href="#">Third Level Item</a></li>
                                    <li><a href="#">Third Level Item</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li class="sidebar-heading"><h4>Extras</h4></li>
                    <li><a href="charts.html"><i class="fa fa-bar-chart-o fa-fw"></i>&nbsp;
                        Charts</a></li>
                    <li><a href="transitions.html"><i class="fa fa-eye fa-fw"></i>&nbsp;
                        Transitions</a></li>
                </ul>
            </div>
        </nav>
        <!--END SIDEBAR MENU--><!--BEGIN PAGE WRAPPER-->
        <div id="page-wrapper"><!--BEGIN PAGE HEADER & BREADCRUMB-->
            <div class="page-header-breadcrumb hide">
                <div class="page-heading hidden-xs"><h1 class="page-title">Dashboard</h1></div>
                <ol class="breadcrumb page-breadcrumb">
                    <li><i class="fa fa-home"></i>&nbsp;<a href="index.html">Home</a>&nbsp;&nbsp;<i
                            class="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                    <li class="hide"><a href="#">Dashboard</a>&nbsp;&nbsp;<i class="fa fa-angle-right"></i>&nbsp;&nbsp;
                    </li>
                    <li class="active">Dashboard</li>
                </ol>
            </div>
            <!--END PAGE HEADER & BREADCRUMB--><!--BEGIN CONTENT-->
            <div class="page-content">
                <div id="tab-general">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="panel">
                                <div class="panel-body">
                                    <div id="counter-chart" style="width: 100%; height:292px"></div>
                                    <div id="site-stats">
                                        <div class="row">
                                            <div class="col-md-6 col-sm-6">
                                                <div class="row">
                                                    <div class="col-md-4">
                                                        <div class="stats-chart visits-stats"><input type="text"
                                                                                                     rel="68" value="0"
                                                                                                     data-width="90"
                                                                                                     data-height="90"
                                                                                                     data-readOnly="true"
                                                                                                     data-min="0"
                                                                                                     data-max="100"
                                                                                                     class="dial"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-8">
                                                        <div class="stats-info">
                                                            <div class="stats-total"><span id='visits-number'>0</span>
                                                            </div>
                                                            <div class="stats-title">Visits</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-sm-6">
                                                <div class="row">
                                                    <div class="col-md-4">
                                                        <div class="stats-chart pageviews-stats"><input type="text"
                                                                                                        rel="90"
                                                                                                        value="0"
                                                                                                        data-width="90"
                                                                                                        data-height="90"
                                                                                                        data-readOnly="true"
                                                                                                        data-min="0"
                                                                                                        data-max="100"
                                                                                                        class="dial"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-8">
                                                        <div class="stats-info">
                                                            <div class="stats-total"><span id='pageviews-number'></span>
                                                            </div>
                                                            <div class="stats-title">Pageviews</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="panel">
                                        <div class="panel-body">
                                            <ol id="sample" class="ticker">
                                                <li>Welcome to Odin - The Ultimate Responsive Admin Template</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 col-xs-12">
                                    <div class="panel">
                                        <div class="panel-body"><h4 class="block-heading">Earning<span
                                                class="pull-right">$<span id='earning-number'></span></span></h4>

                                            <div id="earning-chart" style="width: 100%; height:100px"></div>
                                        </div>
                                    </div>
                                    <div class="panel">
                                        <div class="panel-body"><h4 class="block-heading">Traffic Sources</h4>

                                            <div id="traffice-sources-chart" style="width: 100%; height:100px"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-xs-12">
                                    <div class="panel">
                                        <div class="panel-body"><h4 class="block-heading">New Customers<span
                                                class="pull-right"><span id='new-customer-number'></span></span></h4>

                                            <div id="new-customer-chart" style="width: 100%; height:100px"></div>
                                        </div>
                                    </div>
                                    <div class="panel">
                                        <div class="panel-body"><h4 class="block-heading">Internet Speed</h4>

                                            <div id="internet-speed-chart" style="width: 100%; height:100px"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <div id="world-map"></div>
                        </div>
                        <div class="col-lg-2">
                            <div class="panel">
                                <div class="panel-body"><h4 class="block-heading">Users Online<span
                                        class="pull-right"><span id='users-number'></span></span></h4>
                                    <ul class="users-online list-unstyled">
                                        <li>
                                            <div class="name"><a href="#">Robert Warren</a></div>
                                            <div class="status is-online"></div>
                                        </li>
                                        <li>
                                            <div class="name"><a href="#">Judy Jackson</a></div>
                                            <div class="status is-idle"></div>
                                        </li>
                                        <li>
                                            <div class="name"><a href="#">Susan Bowman</a></div>
                                            <div class="status is-busy"></div>
                                        </li>
                                        <li>
                                            <div class="name"><a href="#">Frances Perez</a></div>
                                            <div class="status is-online"></div>
                                        </li>
                                        <li>
                                            <div class="name"><a href="#">Joshua Stevens</a></div>
                                            <div class="status is-online"></div>
                                        </li>
                                        <li>
                                            <div class="name"><a href="#">Tammy Stewart</a></div>
                                            <div class="status is-busy"></div>
                                        </li>
                                        <li>
                                            <div class="name"><a href="#">Roger Morris</a></div>
                                            <div class="status is-idle"></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="panel">
                                <div class="panel-heading pan"><img src="http://lorempixel.com/1280/500/nature/7"
                                                                    class="img-responsive"/></div>
                                <div class="panel-body">
                                    <div class="user-profile">
                                        <div class="info">
                                            <div class="avatar"><img src="images/avatar/1.jpg" alt=""
                                                                     class="img-responsive img-circle"/></div>
                                            <div class="desc">
                                                <div class="name">John Doe</div>
                                                <div class="status">Make Different - Make Better</div>
                                            </div>
                                        </div>
                                        <div class="social">
                                            <div class="row">
                                                <div class="col-md-4 col-xs-4">
                                                    <div class="follower text-muted">Follower</div>
                                                    <div class="count">2,200</div>
                                                </div>
                                                <div class="col-md-4 col-xs-4">
                                                    <div class="follower text-muted">Following</div>
                                                    <div class="count">1,860</div>
                                                </div>
                                                <div class="col-md-4 col-xs-4">
                                                    <div class="follower text-muted">Tweets</div>
                                                    <div class="count">2,490</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="panel">
                                <div style="overflow:hidden" class="panel-body pan">
                                    <div class="widget-weather">
                                        <div class="wt-head"><p>Hungary, Sz�chenyi L�nch�d</p>
                                            <span>Thursday, 20-03-2014</span></div>
                                        <div class="wt-body">
                                            <canvas id="rain" width="90px" height="90px"></canvas>
                                            <span>22&deg;</span>

                                            <div class="sub-weather">
                                                <p class="mrm">
                                                    <canvas id="partly-cloudy-night" width="48px"
                                                            height="48px"></canvas>
                                                    <span>Night</span></p>
                                                <p class="mlm">
                                                    <canvas id="wind" width="48px" height="48px"></canvas>
                                                    <span>Wind</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="panel">
                                <div class="panel-body"><h4 class="block-heading"><i class="fa fa-user"></i>&nbsp;
                                    My Skills</h4>

                                    <div class="my-skills"><p>Photoshop

                                        <div data-hover="tooltip" title="60%" class="progress progress-sm">
                                            <div role="progressbar" aria-valuenow="60" aria-valuemin="0"
                                                 aria-valuemax="100" style="width: 60%;"
                                                 class="progress-bar progress-bar-blue"><span class="sr-only">60% Complete</span>
                                            </div>
                                        </div>
                                        </p><p>Wordpress

                                        <div data-hover="tooltip" title="40%" class="progress progress-sm">
                                            <div role="progressbar" aria-valuenow="40" aria-valuemin="0"
                                                 aria-valuemax="100" style="width: 40%;"
                                                 class="progress-bar progress-bar-blue"><span class="sr-only">40% Complete</span>
                                            </div>
                                        </div>
                                        </p><p>HTML

                                        <div data-hover="tooltip" title="80%" class="progress progress-sm">
                                            <div role="progressbar" aria-valuenow="80" aria-valuemin="0"
                                                 aria-valuemax="100" style="width: 80%;"
                                                 class="progress-bar progress-bar-blue"><span class="sr-only">80% Complete</span>
                                            </div>
                                        </div>
                                        </p><p>Wordpress

                                        <div data-hover="tooltip" title="40%" class="progress progress-sm">
                                            <div role="progressbar" aria-valuenow="40" aria-valuemin="0"
                                                 aria-valuemax="100" style="width: 40%;"
                                                 class="progress-bar progress-bar-blue"><span class="sr-only">40% Complete</span>
                                            </div>
                                        </div>
                                        </p></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="panel">
                                <div class="panel-body"><h4 class="block-heading">App Store<span class="pull-right">Total: <span
                                        id='app-number'></span></span></h4>

                                    <div class="table-responsive">
                                        <table class="table table-border-dashed table-hover mbn">
                                            <thead>
                                            <tr>
                                                <th>App Name</th>
                                                <th>Views</th>
                                                <th>Download</th>
                                                <th>Percent</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>Highway Rider</td>
                                                <td>6.843</td>
                                                <td>2.346</td>
                                                <td>
                                                    <div data-hover="tooltip" title="20%"
                                                         class="progress progress-xs mbs">
                                                        <div role="progressbar" aria-valuenow="20" aria-valuemin="0"
                                                             aria-valuemax="100" style="width: 20%;"
                                                             class="progress-bar progress-bar-green"><span
                                                                class="sr-only">20% Complete</span></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>FaceFighter Ultimate</td>
                                                <td>3.517</td>
                                                <td>1.320</td>
                                                <td>
                                                    <div data-hover="tooltip" title="40%"
                                                         class="progress progress-xs mbs">
                                                        <div role="progressbar" aria-valuenow="40" aria-valuemin="0"
                                                             aria-valuemax="100" style="width: 40%;"
                                                             class="progress-bar progress-bar-blue"><span
                                                                class="sr-only">40% Complete</span></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>My Talking Tom</td>
                                                <td>15.803</td>
                                                <td>4.780</td>
                                                <td>
                                                    <div data-hover="tooltip" title="30%"
                                                         class="progress progress-xs mbs">
                                                        <div role="progressbar" aria-valuenow="30" aria-valuemin="0"
                                                             aria-valuemax="100" style="width: 30%;"
                                                             class="progress-bar progress-bar-green"><span
                                                                class="sr-only">30% Complete</span></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Bomb Me</td>
                                                <td>14.190</td>
                                                <td>7.884</td>
                                                <td>
                                                    <div data-hover="tooltip" title="60%"
                                                         class="progress progress-xs mbs">
                                                        <div role="progressbar" aria-valuenow="60" aria-valuemin="0"
                                                             aria-valuemax="100" style="width: 60%;"
                                                             class="progress-bar progress-bar-blue"><span
                                                                class="sr-only">60% Complete</span></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Coin Dozer</td>
                                                <td>6.285</td>
                                                <td>628</td>
                                                <td>
                                                    <div data-hover="tooltip" title="80%"
                                                         class="progress progress-xs mbs">
                                                        <div role="progressbar" aria-valuenow="80" aria-valuemin="0"
                                                             aria-valuemax="100" style="width: 80%;"
                                                             class="progress-bar progress-bar-orange"><span
                                                                class="sr-only">80% Complete</span></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Temple Run 2</td>
                                                <td>7.836</td>
                                                <td>649</td>
                                                <td>
                                                    <div data-hover="tooltip" title="65%"
                                                         class="progress progress-xs mbs">
                                                        <div role="progressbar" aria-valuenow="65" aria-valuemin="0"
                                                             aria-valuemax="100" style="width: 65%;"
                                                             class="progress-bar progress-bar-yellow"><span
                                                                class="sr-only">65% Complete</span></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="panel panel-primary">
                                <div class="panel-heading pan"><img src="http://lorempixel.com/750/500/food/8/"
                                                                    class="img-responsive"/></div>
                                <div class="panel-footer text-center"><a href="#download" class="plm prm"><span
                                        class="fa fa-download fa-2x"></span></a><a href="#facebook"
                                                                                   class="plm prm"><span
                                        class="fa fa-facebook fa-2x"></span></a><a href="#twitter" class="plm prm"><span
                                        class="fa fa-twitter fa-2x"></span></a><a href="#share" class="plm prm"><span
                                        class="fa fa-share fa-2x"></span></a></div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="panel">
                                <div class="panel-body"><h4 class="block-heading">ToDo's</h4>

                                    <div id="todos-list">
                                        <ul id="todos-list-sort" class="list-unstyled">
                                            <li>
                                                <div class="input-group"><input id="todos-list-input" type="text"
                                                                                placeholder="Key word" value=""
                                                                                class="form-control"/><span
                                                        class="input-group-btn"><button id="todos-list-add"
                                                                                        type="button"
                                                                                        class="btn btn-primary">Add
                                                </button></span></div>
                                            </li>
                                            <li><input type="checkbox" id="task-item-1"/><label for="task-item-1">Learn
                                                a key board shortcut</label><a href="javascript:;" data-hover="tooltip"
                                                                               data-original-title="remove"
                                                                               class="delete"><span
                                                    class="fa fa-trash-o"></span></a></li>
                                            <li><input type="checkbox" id="task-item-2"/><label for="task-item-2">Fix
                                                the HTML code</label><a href="javascript:;" data-hover="tooltip"
                                                                        data-original-title="remove"
                                                                        class="delete"><span
                                                    class="fa fa-trash-o"></span></a></li>
                                            <li><input type="checkbox" id="task-item-3"/><label for="task-item-3">Fix
                                                the php code</label><a href="javascript:;" data-hover="tooltip"
                                                                       data-original-title="remove" class="delete"><span
                                                    class="fa fa-trash-o"></span></a></li>
                                            <li><input type="checkbox" id="task-item-4"/><label for="task-item-4">Convert
                                                HTML to Wordpress</label><a href="javascript:;" data-hover="tooltip"
                                                                            data-original-title="remove" class="delete"><span
                                                    class="fa fa-trash-o"></span></a></li>
                                            <li><input type="checkbox" id="task-item-5"/><label for="task-item-5">Convert
                                                HTML to Opencart</label><a href="javascript:;" data-hover="tooltip"
                                                                           data-original-title="remove"
                                                                           class="delete"><span
                                                    class="fa fa-trash-o"></span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="panel">
                                <div class="panel-heading pan pbxxl">
                                    <div id="ex-slider" data-ride="carousel" class="carousel slide pbl">
                                        <ol class="carousel-indicators list-indicators">
                                            <li data-target="#ex-slider" data-slide-to="0" class="active"></li>
                                            <li data-target="#ex-slider" data-slide-to="1"></li>
                                            <li data-target="#ex-slider" data-slide-to="2"></li>
                                            <li data-target="#ex-slider" data-slide-to="3"></li>
                                            <li data-target="#ex-slider" data-slide-to="4"></li>
                                        </ol>
                                        <div class="carousel-inner">
                                            <div class="item active"><img src="http://lorempixel.com/750/500/food/2/"
                                                                          alt="" class="img-responsive"/></div>
                                            <div class="item"><img src="http://lorempixel.com/750/500/food/1/" alt=""
                                                                   class="img-responsive"/></div>
                                            <div class="item"><img src="http://lorempixel.com/750/500/food/3/" alt=""
                                                                   class="img-responsive"/></div>
                                            <div class="item"><img src="http://lorempixel.com/750/500/food/4/" alt=""
                                                                   class="img-responsive"/></div>
                                            <div class="item"><img src="http://lorempixel.com/750/500/food/5/" alt=""
                                                                   class="img-responsive"/></div>
                                        </div>
                                        <a href="#ex-slider" data-slide="prev" class="left carousel-control"><i
                                                class="fa fa-chevron-left fa-2x"></i></a><a href="#ex-slider"
                                                                                            data-slide="next"
                                                                                            class="right carousel-control"><i
                                            class="fa fa-chevron-right fa-2x"></i></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--END CONTENT--><!--BEGIN FOOTER-->
            <div class="page-footer">
                <div class="copyright">2014 � Odin - The Ultimate Responsive Admin Template.</div>
            </div>
            <!--END FOOTER--></div>
        <!--END PAGE WRAPPER--></div>
</div>
<script src="js/jquery-1.9.1.js"></script>
<script src="js/jquery-migrate-1.2.1.min.js"></script>
<script src="js/jquery-ui.js"></script>
<!--loading bootstrap js-->
<script src="vendors/bootstrap/js/bootstrap.min.js"></script>
<script src="vendors/bootstrap-hover-dropdown/bootstrap-hover-dropdown.js"></script>
<script src="js/html5shiv.js"></script>
<script src="js/respond.min.js"></script>
<script src="vendors/metisMenu/jquery.metisMenu.js"></script>
<script src="vendors/slimScroll/jquery.slimscroll.js"></script>
<script src="vendors/jquery-cookie/jquery.cookie.js"></script>
<script src="js/jquery.menu.js"></script>
<script src="vendors/jquery-pace/pace.min.js"></script>
<!--LOADING SCRIPTS FOR PAGE-->
<script src="vendors/jquery-jvectormap/jquery-jvectormap-1.2.2.min.js"></script>
<script src="vendors/jquery-jvectormap/jquery-jvectormap-world-mill-en.js"></script>
<script src="vendors/jquery-jvectormap/gdp-data.js"></script>
<script src="vendors/jquery-knob/jquery.knob.js"></script>
<script src="vendors/jquery-animateNumber/jquery.animateNumber.min.js"></script>
<script src="vendors/flot-chart/jquery.flot.js"></script>
<script src="vendors/flot-chart/jquery.flot.categories.js"></script>
<script src="vendors/flot-chart/jquery.flot.pie.js"></script>
<script src="vendors/flot-chart/jquery.flot.tooltip.js"></script>
<script src="vendors/flot-chart/jquery.flot.resize.js"></script>
<script src="vendors/flot-chart/jquery.flot.fillbetween.js"></script>
<script src="vendors/flot-chart/jquery.flot.stack.js"></script>
<script src="vendors/flot-chart/jquery.flot.spline.js"></script>
<script src="vendors/skycons/skycons.js"></script>
<script src="vendors/jquery-news-ticker/jquery.news-ticker.js"></script>
<script src="js/index.js"></script>
<!--CORE JAVASCRIPT-->
<script src="js/app.js"></script>
<script src="js/main.js"></script>
<script src="js/holder.js"></script>
<script type="text/javascript">(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-145464-11', 'next-themes.com');
ga('send', 'pageview');


</script>
</body>
</html>