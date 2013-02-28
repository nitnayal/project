<?php

class IndexController extends Zend_Controller_Action
{
	protected $session;
	
	public function preDispatch()
	{
		$this->session = new Zend_Session_Namespace('Default');
		$this->session->pageCounter = isset($this->session->pageCounter)?$this->session->pageCounter++:0;
	}
    public function init()
    {
        /* Initialize action controller here */
    }

    public function indexAction()
    {
        // action body
		$this->view->counter = $this->session->pageCounter++;
	
	}
}

