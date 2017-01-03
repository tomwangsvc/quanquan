<?php
class AccountHelper {
	
	/**
	 * send email
	 * 
	 * @param unknown $receivername        	
	 * @param unknown $receiveremail        	
	 * @param unknown $sender        	
	 * @param unknown $subject        	
	 * @param unknown $html        	
	 */
	public function SendRregisterSuccessEmail($receivername, $receiveremail, $sender, $subject, $html) {
	
		$configs = Zend_Controller_Front::getInstance ()->getParam ( 'bootstrap' );
		$con = $configs->getOption ( 'mail' );
		$config = array (
				'auth' => 'login',
				'username' => $con ['transport'] ['username'],
				'password' => $con ['transport'] ['password'] 
		);
		// file_put_contents("e:/mylog.log",$config['username']."-".$password."\r\n",FILE_APPEND);
		$transport = new Zend_Mail_Transport_Smtp ( $con ['transport'] ['host'], $config );
		$mail = new Zend_Mail ( "utf-8" );
		//file_put_contents("e:/mylog.log",$receiveremail."\r\n",FILE_APPEND);
		$mail->setFrom ( $config ['username'], $sender );
		$mail->addTo ( $receiveremail, $receivername );
		$mail->setSubject ( $subject );
		$mail->setBodyHtml ( $html );
		file_put_contents("e:/mylog.log",$receivername."\r\n",FILE_APPEND);
		$mail->send ( $transport );
		file_put_contents("e:/mylog.log",$receiveremail."\r\n",FILE_APPEND);
		return true;
	}
	
	
}