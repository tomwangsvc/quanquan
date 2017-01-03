<?php
require_once APPLICATION_PATH . '/models/DbHelper.php';
require_once APPLICATION_PATH . '/models/JobDbTranslator.php';

class RecuitController extends Zend_Controller_Action
{

    public function init()
    {   	
    	$layout = $this->_helper->layout ();
    	$layout->setLayout ( 'layout' );
    	$this->view->current = "index";
    	
        $dbhelper = new DbHelper();
    	$this->view->recuits = $dbhelper->getSubCategoriesByParentId("101");
    	$this->view->businesses = $dbhelper->getSubCategoriesByParentId("108");
    	$this->view->travel = $dbhelper->getSubCategoriesByParentId("105");
	
        /* Initialize action controller here */
    }

    public function indexAction()
    {
    	$dbhelper = new DbHelper();   
    	$jobs = $dbhelper->getJobdb();
    	$jobtranslator = new JobDbTranslator();
    	$arr = array();
    	foreach($jobs as $job){
    	   $job=$jobtranslator->JobTranslator($job);
    	   $arr[]=$job;
    	}
    	$this->view->jobs = $arr;   
    }
    public function detailsAction()
    {
    	//$job_id = $this->getRequest ()->getParam ( 'job_id' );
    	$job_id="2";
    	$dbhelper = new DbHelper();
    	$job = $dbhelper->getJobDetailsById($job_id);   	
    	$jobtranslator = new JobDbTranslator();
    	$this->view->job = $jobtranslator->JobTranslator($job);

    }
     
  
}