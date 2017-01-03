<?php
require_once APPLICATION_PATH . '/models/DbHelper.php';

class IndexController extends Zend_Controller_Action
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
        $regions = new Application_Model_DbTable_Regions();
        $regions = $regions ->fetchAll ()->toArray ();
        $this->view->regions = $regions;
        
        $cities = new Application_Model_DbTable_Cities();
        $cities = $cities ->fetchAll ()->toArray ();
        $this->view->cities = $cities;

        $towns = new Application_Model_DbTable_Towns();
        $towns = $towns ->fetchAll ()->toArray ();
        $this->view->towns = $towns;
        //$ip = $this->getRequest()->getServer('REMOTE_ADDR');
        
        $dbhelper = new DbHelper();
    	$this->view->categories = $dbhelper->getCategories();
    	$this->view->subcategories= $dbhelper->getSubCategories();
    	$this->view->subsubcategories = $dbhelper->getSubsubCategories();
    	
//         print "<pre>";
//         print_r($sub_sub_categories);
//         print "</pre>";
//         exit;
         
    }
    public function regionAction(){
       
       $id = $this->getRequest ()->getParam ( 'region_id' );
       $dbhelper = new DbHelper();
       $region_name="";
       if(10000<$id && $id<20000){
           $region_name = $dbhelper->getRegionByid($id);
       }else{
           $region_name = $dbhelper->getDistrictByid($id);
       }
       if ($region_name) {
           echo $region_name;
           exit;
       }
    }
    
    public function categoryAction(){
         
        $id = $this->getRequest ()->getParam ( 'category_id' );
        $dbhelper = new DbHelper();
        $category_name = $dbhelper->getCategoryByid($id);
        if ($category_name) {
            echo $category_name;
            exit;
        }
    }
    
    
    
}