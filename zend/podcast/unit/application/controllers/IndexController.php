<?php

class IndexController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
    }

    public function indexAction()
    {
		$this->view->message = $this->_getParam('m','pop pop');
    }
    public function aboutAction()
    {
        // action body
    }

}

