<?php
require_once APPLICATION_PATH . '/models/DbHelper.php';

class JobDbTranslator {
	
	public function JobTranslator($job){
		
		$job['job_type']=$this->JobTypeConvertor($job['job_type']);
		$job['qualification'] = $this->JobQualificationConvertor($job['qualification']);
		$job['gender'] = $this->JobGenderConvertor($job['gender']);
		$job['language'] = $this->JobLanguageConvertor($job['language']);
		$job['pay_type'] = $this->JobPaytypeConvertor($job['pay_type']);
		$job['ad_type'] = $this->JobAdtypeConvertor($job['ad_type']);
		$job['experience'] = $this->JobExperienceConvertor($job['experience']);
		$job['min_pay'] = $this->JobPayConvertor($job['min_pay']);
		$job['max_pay'] = $this->JobPayConvertor($job['max_pay']);
		$job['work_visa'] = $this->JobVisaConvertor($job['work_visa']);
		$dbhelper = new DbHelper();
		$job['town'] = $dbhelper->getTownByid($job['town_id']);
		$job['city'] = $dbhelper->getCityByid($job['city_id']);
		$job['region'] = $dbhelper->getRegionByid($job['region_id']);
		return $job;
	}	


	public function JobVisaConvertor($attr){
	
		if($attr == "1"){
	
			return "提供";
		}
		if($attr == "2"){
	
			return "不提供";
		}
	}
	
	public function JobPayConvertor($attr){
		
		if($attr == "1"){
		
			return "面议";
		}
		if($attr == "2"){
		
			return "最低时薪";
		}
		if($attr == "3"){
		
			return "$17.5";
		}
		if($attr == "4"){
		
			return "$20";
		}
		if($attr == "5"){
		
			return "$30";
		}
		if($attr == "6"){
		
			return "$40";
		}
		if($attr == "7"){
		
			return "$50";
		}
		if($attr == "8"){
		
			return "$75";
		}
		if($attr == "9"){
		
			return "$100";
		}
		if($attr == "10"){
		
			return "$150";
		}
		if($attr == "11"){
		
			return "20";
		}
		if($attr == "12"){
		
			return "30";
		}
		if($attr == "13"){
		
			return "40";
		}
		if($attr == "14"){
		
			return "50";
		}
		if($attr == "15"){
		
			return "60";
		}
		if($attr == "16"){
		
			return "70";
		}
		if($attr == "17"){
		
			return "80";
		}
		if($attr == "18"){
		
			return "90";
		}
		if($attr == "19"){
		
			return "100";
		}
		if($attr == "20"){
		
			return "200";
		}
		
		
		
	}
	public function JobExperienceConvertor($attr){
	
		if($attr == "1"){
	
			return "实习生";
		}
		if($attr == "2"){
	
			return "1-2年";
		}
		if($attr == "3"){
		
			return "3-5年";
		}
		if($attr == "4"){
		
			return "5-10年";
		}
		if($attr == "5"){
		
			return "10年以上";
		}
	
	}
	
	
	public function JobAdtypeConvertor($attr){
	
		if($attr == "1"){
	
			return "个人发布";
		}
		if($attr == "2"){
	
			return "企业发布";
		}
	
	}
	
	public function JobPaytypeConvertor($attr){
	
		if($attr == "1"){
	
			return "时薪";
		}
		if($attr == "2"){
	
			return "年薪";
		}
		if($attr == "3"){
	
			return "其它";
		}
	
	}
	
	public function JobLanguageConvertor($attr){
	
		if($attr == "1"){
				
			return "中文";
		}
		if($attr == "2"){
	
			return "英文";
		}
		if($attr == "3"){
	
			return "其它";
		}
	
	}
	
	public function JobGenderConvertor($attr){

		if($attr == "1"){
					
			return "不限";
		}
		if($attr == "2"){
	
			return "男";
		}
		if($attr == "3"){
	
			return "女";
		}
		
	}
	
	
	public function JobQualificationConvertor($attr){
	
		if($attr == "1"){
	
			return "不限";
		}
		if($attr == "2"){
	
			return "高中/中专";
		}
		if($attr == "3"){
	
			return "大专";
		}
		if($attr == "4"){
	
			return "本科";
		}
		if($attr == "5"){
		
			return "研究生及以上";
		}
	}
	
	public function JobTypeConvertor($attr){
		
		if($attr == "1"){
				
			return "全职";
		}
		if($attr == "2"){
		
			return "兼职";
		}
		if($attr == "3"){
		
			return "合同";
		}
		if($attr == "4"){
		
			return "其它";
		}
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