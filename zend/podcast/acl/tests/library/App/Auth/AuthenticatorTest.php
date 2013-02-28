<?php

class App_Auth_AuthenticatorTest extends ControllerTestCase
{
	protected $auth;
	protected $regularUser = 'john';
	protected $regularPass = 'pass';
	
	public function setUp()
	{
		parent::setUp();
		$this->auth = new App_Auth_Authenticator();
	}
	public function testCanDetectFailedAdminLogin()
	{
		$this->assertFalse($this->auth->getCredentials('admin', 'someBadPass'));
		$this->assertEquals(App_Auth_Authenticator::ERR_BAD_PASSWORD, $this->auth->getErrorMessage());				
	}
	public function testCanDetectValidLogin()
	{
		$this->assertTrue($this->auth->getCredentials('admin','qwerty') instanceof stdClass);
	}
	public function testCanDetectInvalidLogin()
	{
		$badUser = 'nouser';
		$this->assertFalse($this->auth->getCredentials($badUser, 'someBadPass'));
		$this->assertEquals(App_Auth_Authenticator::ERR_NOT_FOUND, $this->auth->getErrorMessage());	
	}
	
	public function testCanDetectFailedLogin()
	{
		$this->assertFalse($this->auth->getCredentials($this->regularUser, 'someBadPass'));
		$this->assertEquals(App_Auth_Authenticator::ERR_BAD_PASSWORD, $this->auth->getErrorMessage());			
	}
	
	public function testCanDetectValidUserLogin()
	{
		$this->assertTrue($this->auth->getCredentials($this->regularUser,$this->regularPass) instanceof stdClass);
	}
}