<?php

class App_Auth_UserLookup
{
	private static $users = array(
		"john" => "pass",
		"emily" => "pass",
		"robert" => "pass",
		"eric" => "pass",
	);
	public static function findByUsername($username)
	{
		if(array_key_exists($username, self::$users)){
			$account = new stdClass();
			$account->role = App_Roles::FREE;
			$account->username = $username;
			$account->password = self::$users[$username];
			$account->description = "Free account";
			return $account;
		}
		return false;
	}
}