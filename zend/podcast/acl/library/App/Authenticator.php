<?php

class App_Auth_Authenticator
{
	public function getCredentials($username, $password)
	{
		$freeUser = App_auth_UserLookup::findByUsername($username);
		if($freeUser){
		
		}else{
			
		}
		return false;
	}
}