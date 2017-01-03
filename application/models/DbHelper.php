<?php
class DbHelper {
	
	public function getCategories(){
		$categories = new Application_Model_DbTable_Categories();
		$categories = $categories ->fetchAll ()->toArray ();
		return  $categories;
	}
	public function getSubCategories(){
		$subcategories = new Application_Model_DbTable_Subcategories();
		$subcategories = $subcategories ->fetchAll ()->toArray ();
		return  $subcategories;
	}
	public function getSubsubCategories(){
		$subsubcategories = new Application_Model_DbTable_Subsubcategories();
		$subsubcategories = $subsubcategories ->fetchAll ()->toArray ();
		return  $subsubcategories;
	}	

	public function getSubCategoriesByParentId($category_id){
	
		$subcategory = new Application_Model_DbTable_Subcategories();
		$db = $subcategory->getAdapter ();
		$where = $db->quoteInto ( 'parent_id=?', $category_id );
		$res = $subcategory->fetchAll($where)->toArray();
		return $res;
			
	}
	public function getSubSubCategoriesByParentId($subcategory_id){
	
		$subsubcategory = new Application_Model_DbTable_Subsubcategories();
		$db = $subsubcategory->getAdapter ();
		$where = $db->quoteInto ( 'parent_id=?', $subcategory_id );
		$res = $subsubcategory->fetchAll($where)->toArray();
		return $res;
	}
	public function getCitiesByParentId($region_id){
	
		$cities= new Application_Model_DbTable_Cities();
		$db = $cities->getAdapter ();
		$where = $db->quoteInto ( 'parent_id=?', $region_id );
		$res = $cities->fetchAll($where)->toArray();
		return $res;
			
	}
		public function getTownsByParentId($city_id){
	
		$towns = new Application_Model_DbTable_Towns();
		$db = $towns->getAdapter ();
		$where = $db->quoteInto ( 'parent_id=?', $city_id );
		$res = $towns->fetchAll($where)->toArray();
		return $res;
			
	}
	
	public function getRegionByid($id) {
		$regions = new Application_Model_DbTable_Regions ();
		$db = $regions->getAdapter ();
		$where = $db->quoteInto ( 'region_id=?', $id );
		$res = $regions->fetchRow ( $where );
		return $res ['region_name'];
	}
	public function getCityByid($id) {
		$city = new Application_Model_DbTable_Cities();
		$db = $city->getAdapter ();
		$where = $db->quoteInto ( 'city_id=?', $id );
		$res = $city->fetchRow ( $where );
		return $res ['city_name'];
	}
	public function getTownByid($id) {
		$town = new Application_Model_DbTable_Towns();
		$db = $town->getAdapter ();
		$where = $db->quoteInto ( 'town_id=?', $id );
		$res = $town->fetchRow ( $where );
		return $res ['town_name'];
	}
	
	

	public function getCategoryByid($id) {
		$category = new Application_Model_DbTable_Categories();
		$db = $category->getAdapter ();
		$where = $db->quoteInto ( 'category_id=?', $id );
		$res = $category->fetchRow ( $where )->toArray ();
		return $res ['category_name'];
	}
	
	public function getJobdb(){
		$jobs = new Application_Model_DbTable_Dbrecruits();
		$jobs = $jobs ->fetchAll ()->toArray ();		
		return $jobs ;
		
	}
	public function getJobDetailsById($id){
		$job = new Application_Model_DbTable_Dbrecruits();
		$db = $job->getAdapter ();
		$where = $db->quoteInto ( 'id=?', $id );
		$res = $job->fetchRow ( $where )->toArray ();
		return $res;
	
	}
	public function getUsernameByid($id) {
	    $users = new Application_Model_DbTable_Users ();
	    $db = $users->getAdapter ();
	    $where = $db->quoteInto ( 'id=?', $id );
	    $res = $users->fetchRow ( $where )->toArray ();
	    return $res ['username'];
	}
	

	
	
	public function convertJobtoShow($res) {
		if ($res ['pay_type'] == '1') {
			$res ['pay'] = "$" . number_format ( $res ['minimum_pay'] ) . "-" . number_format ( $res ['maximum_pay'] ) . "K/年";
		}
		if ($res ['pay_type'] == '2') {
			
			$res ['pay'] = "$" . $res ['minimum_pay'] . "-" . $res ['maximum_pay'] . "/小时";
		}
		if ($res ['job_age'] == 0) {
			$res ['job_age'] = "不限";
		}
		if ($res ['job_age'] == 1) {
			$res ['job_age'] = "毕业生/实习生";
		}
		if ($res ['job_age'] == 2) {
			$res ['job_age'] = "1到2年";
		}
		if ($res ['job_age'] == 3) {
			$res ['job_age'] = "2到4年";
		}
		if ($res ['job_age'] == 4) {
			$res ['job_age'] = "4年以上";
		}
		$res ['regron'] = $this->getRegionByid ( $res ['regron'] );
		$res ['district'] = $this->getDistrictByid ( $res ['district'] );
		$res ['category'] = $this->getCategoryByid ( $res ['category_id'] );
		
		if ($res ['qualification'] == 0) {
			$res ['qualification'] = '不限';
		}
		if ($res ['qualification'] == 1) {
			$res ['qualification'] = '高中/中专';
		}
		if ($res ['qualification'] == 2) {
			$res ['qualification'] = '大学/本科';
		}
		if ($res ['qualification'] == 3) {
			$res ['qualification'] = '研究生以上';
		}
		if ($res ['gender'] == 0) {
			$res ['gender'] = "不限";
		}
		if ($res ['gender'] == 1) {
			$res ['gender'] = "男";
		}
		if ($res ['gender'] == 2) {
			$res ['gender'] = "女";
		}
		$res ['postdate'] = date ( 'Y-m-d', $res ['postdate'] );
		
		return $res;
	}
	/**
	 * get jobs's details for job display
	 * 
	 * @param unknown $arr        	
	 * @return multitype:multitype:unknown Ambigous <string, unknown> string NULL
	 */
	public function getJobDetails($arr) {
		$data = array ();
		foreach ( $arr as $r ) {
			$temp = array ();
			$temp ['id'] = $r ['id'];
			$temp ['numofpeople'] = $r ['numofpeople'];
			$temp ['job_type'] = ($r ['job_type'] == 1) ? '全职' : (($r ['job_type'] == 2) ? '兼职' : "合同工");
			$temp ['title'] = $r ['title'];
			$temp ['comname'] = $r ['comname'] ? $r ['comname'] : $this->getUsernameByid ( $r ['poster_id'] ) . "<span class='personal'>（个人）</span>";
			$temp ['region'] = $this->getDistrictByid ( $r ['district'] );
			$temp ['time'] = (date ( 'Ymd', $r ['updatedate'] ) == date ( 'Ymd' )) ? "今天" : ((date ( 'Ymd', $r ['updatedate'] ) == (date ( 'Ymd' ) - 1)) ? "昨天" : date ( 'm月d日', $r ['updatedate'] ));
			$temp ['domain'] = ($r ['domain']) ? $r ['domain'] : "#";
			$temp ['category_id'] = $r ['category_id'];
			$temp ['subcategory_id'] = $r ['subcategory_id'];
			$temp ['collected'] = false;
			if (isset ( $_SESSION ['user'] )) {
				if ($this->checkIfJobcollected ( $r ['id'], $_SESSION ['user'] ['id'] )) {
					$temp ['collected'] = true;
				}
			}
			$data [] = $temp;
		}
		return $data;
	}
	
	/**
	 * check if the logined user collect this job
	 * 
	 * @param unknown $jobid        	
	 * @param unknown $userid        	
	 * @return boolean
	 */
	public function checkIfJobcollected($jobid, $userid) {
		$jobscollection = new Application_Model_DbTable_Jobscollection ();
		$db = $jobscollection->getAdapter ();
		$where = $db->quoteInto ( 'job_id=?', $jobid ) . $db->quoteInto ( ' AND user_id=?', $userid );
		if ($jobscollection->fetchRow ( $where )) {
			return true;
		} else {
			return false;
		}
	}
	public function classConvertor($index) {
		if ($index == 1) {
			return '招聘';
		}
		if ($index == 2) {
			return '出租';
		}
		if ($index == 3) {
			return '住宿';
		}
		if ($index == 4) {
			return '房产';
		}
		if ($index == 5) {
			return '生意';
		}
		if ($index == 6) {
			return '拼车';
		}
	}
}