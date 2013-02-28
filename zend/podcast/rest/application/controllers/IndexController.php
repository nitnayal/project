<?php

class IndexController extends Zend_Controller_Action
{

	public function init()
	{
		$uri = $this->_request->getPathInfo();
		$actionNav = $this->view->navigation()->findByUri($uri);
		$activeNav->active = true;
	}
    public function indexAction()
    {		
		$service = new App_HttpClient("searchuser","mys3cr3tk3y");	
		$respone = $service->call("countrysearch", array("query" => "Brunei"));
//		var_dump($respone);
    }
	
	public function sitemapAction()
	{
		echo $this->view->navigation()->sitemap();
	}
}

