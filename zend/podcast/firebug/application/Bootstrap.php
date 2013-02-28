<?php

class Bootstrap extends Zend_Application_Bootstrap_Bootstrap
{	
	protected function _initViewSettings()
	{
        $this->bootstrap('view');
        $this->_view = $this->getResource('view');
        $this->_view->setEncoding('UTF-8');
        $this->_view->doctype('XHTML1_STRICT');
		
		$this->_view->headTitle('Podcast XHTML');
		$this->_view->headTitle()->setSeparator(' - ');
	}

	protected function _initDB()
	{
		$params = array(
			"dbname" => "firebug",
			"username" => "root",
			"password" => "",
			"host" => "localhost",
			"charset" => "utf8"
		);
		$db = Zend_Db::factory("PDO_MYSQL",$params);
		Zend_Registry::set("db",$db);
	}
	
	protected function _initActionHelper()
	{
		$writer = new Zend_Log_Writer_Firebug();
		$logger = new Zend_Log($writer);
		Zend_Registry::set("logger",$logger);
	}
}