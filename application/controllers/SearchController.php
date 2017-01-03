<?php
require_once APPLICATION_PATH . '/models/DbHelper.php';

class SearchController extends Zend_Controller_Action
{

    public function init()
    {   	
    	$layout = $this->_helper->layout ();
    	$layout->setLayout ( 'layout' );
    	$this->view->current = "index";
        /* Initialize action controller here */
    }

    public function indexAction()
    {
      
    }
    public function serviceAction()
    {
    
    }
    public function jobsAction()
    {
    
    }
    public function productsAction()
    {
    
    }

}