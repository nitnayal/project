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

}