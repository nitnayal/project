<?php

class ApiController extends Zend_Controller_Action
{
	protected $appName;
	public $config;
	
	public function init()
	{
		$this->_helper->viewRenderer->setNoRender(true);
		$this->_helper->getHelper('layout')->disableLayout();
	}

	public function preDispatch()
	{
		$this->config = new Zend_Config_Ini(APPLICATION_PATH.'/configs/webconfig.ini','development');
		if(! $this->authAccepted())
			echo Zend_Json_Encoder::encode('YOur private key is invalid');
	}
	
    public function indexAction()
    { 
	
    }
	
    public function countrysearchAction()
    { 
		$query = $this->getRequest()->getParam('query');
		$countryBusinessObject = new App_Countries();
		
		$result = $countryBusinessObject->searchCountries($query);
		echo Zend_Json_Encoder::encode($result);
		
    }
	
	private function authAccepted()
	{
		$this->appName = $this->getRequest()->getParam('appName');
		$keys = $this->config->api->toArray();
		$this->clientkey = $keys[$this->appName]['secret'];
		
		$signature = $this->signArguments($_POST);
		if($signature == $this->getRequest()->getParam('auth'))
			return true;
		return false;
	}
	
	private function signArguments($args)
	{
		ksort($args);
		$signature = '';
		foreach($args as $key=>$val){
			if($key == 'auth') continue;
			$signature .= $key . $val;
		}
		
		return md5($this->clientkey . $signature);
	}
}