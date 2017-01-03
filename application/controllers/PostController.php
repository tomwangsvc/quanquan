<?php
require_once APPLICATION_PATH . '/models/DbHelper.php';
require_once APPLICATION_PATH . '/models/JobDbTranslator.php';

class PostController extends Zend_Controller_Action
{

    public function init()
    {   	
    	$layout = $this->_helper->layout ();
    	$layout->setLayout ( 'layout' );
    	$this->view->current = "index";
        /* Initialize action controller here */
    	
    	$dbhelper = new DbHelper();
    	$this->view->recuits = $dbhelper->getSubCategoriesByParentId("101");
    	$this->view->businesses = $dbhelper->getSubCategoriesByParentId("108");
    	$this->view->travel = $dbhelper->getSubCategoriesByParentId("105");
    }
    public function indexAction()
    {
    	$dbhelper = new DbHelper();
    	$this->view->categories = $dbhelper->getCategories();
    	$this->view->subcategories= $dbhelper->getSubCategories();
    	$this->view->subsubcategories = $dbhelper->getSubsubCategories();
    	
    	 
    }
    public function detailsAction()
    {
    	
    	$regions = new Application_Model_DbTable_Regions();
    	$regions = $regions ->fetchAll ()->toArray ();
    	$this->view->regions = $regions;
    	 
    	$cities = new Application_Model_DbTable_Cities();
    	$cities = $cities ->fetchAll ()->toArray ();
    	$this->view->cities = $cities;
    	 
    	$towns = new Application_Model_DbTable_Towns();
    	$towns  = $towns ->fetchAll ()->toArray ();
    	$this->view->towns  = $towns ;
 	
    }     
    public function getsubcategoriesAction(){
    	$id = $this->getRequest ()->getParam ( 'category_id' );
    	$dbhelper = new DbHelper();
    	$subcategories=$dbhelper->getSubCategoriesByParentId($id);
    	if($subcategories){
	    	echo json_encode ( $subcategories );
	    	exit;
    	}
    }
    public function getsubsubcategoriesAction(){
    	$id = $this->getRequest ()->getParam ( 'subcategory_id' );
    	$dbhelper = new DbHelper();
    	$subsubcategories=$dbhelper->getSubSubCategoriesByParentId($id);
    	if($subsubcategories){
    		echo json_encode($subsubcategories);
    		exit;
    	}
    }
    
      public function getcitiesAction(){
        $id = $this->getRequest ()->getParam ( 'region_id' );
        $dbhelper = new DbHelper();
        $cities=$dbhelper->getCitiesByParentId($id);
        if($cities){
            echo json_encode ( $cities );
            exit;
        }
    }
      public function gettownsAction(){
        $id = $this->getRequest ()->getParam ( 'city_id' );
        $dbhelper = new DbHelper();
        $towns=$dbhelper->getTownsByParentId($id);
        if($towns){
            echo json_encode ( $towns );
            exit;
        }
    }
}