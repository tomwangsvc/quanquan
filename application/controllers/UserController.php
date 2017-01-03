<?php
require_once APPLICATION_PATH . '/models/DbHelper.php';
require_once APPLICATION_PATH . '/models/AccountHelper.php';
define ( 'START_BALANCE', 0 );

class UserController extends Zend_Controller_Action
{

    public function init()
    {   	
    	$layout = $this->_helper->layout ();
    	$layout->setLayout ( 'mobile' );
    	$this->view->current = "index";
        /* Initialize action controller here */
    }

    public function indexAction()
    {
	
//         print "<pre>";
//         print_r($sub_sub_categories);
//         print "</pre>";
//         exit;
         
    }
    public function loginAction()
    {
 	 
    }
    public function logoffAction()
    {
    		
    }
    public function registerAction()
    {

    }
    public function registersucessAction()
    {

    }
    public function accountactiveAction()
    {

    }
    public function signupAction()
    {
    	if ($this->getRequest ()->isPost ()) {
    		$this->_helper->layout->disableLayout ();
    		$this->_helper->viewRenderer->setNoRender ();
    			
    		$email = $this->getRequest ()->getParam ( 'email' );
    		$password = $this->getRequest ()->getParam ( 'password' );
    		if ( empty ( $email ) || empty ( $password )) {
    			echo false;
    			exit;
    		}
    		
    		$users = new Application_Model_DbTable_Users ();
    		$db = $users->getAdapter ();
    		$where = $db->quoteInto ( "email =?", $email );
    		// dauble check if there is already exit this email in users table
    		// before create a new user account
    		//file_put_contents("e:/mylog.log",$email."\r\n",FILE_APPEND);
    		if ($users->fetchRow( $where )) {
    			echo "1";
    			exit;
    		}
    		
    		$accounthelper = new AccountHelper ();
    		$password .= $accounthelper->getSalt ();
    		$password = md5 ( $password );
    		$data = array (
    				'email' => $email,
    				'password' => $password,
    				'balance' => START_BALANCE,
    				'register_date'=>time(),
    				'status'=>'0'
    		);
    			
    		if ($id = $users->insert ( $data )) {
    			echo "2";
    			$receivername="Customer";
    			$sender ="全全服务中心";
    			$subject="全全网账号激活";
    			$html=$accounthelper->getActiveLinkEmail();
    			$accounthelper->SendRregisterSuccessEmail($receivername, $email, $sender, $subject, $html);
    		} else {
    		    echo false;
    		}
    	} 
    	 
    }
 
    
}