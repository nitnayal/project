<?php

class IndexController extends Zend_Controller_Action {

	protected $logger;
	protected $db;
	
	public function init()
	{
		$this->db = Zend_Registry::get("db");
		$this->logger = Zend_Registry::get("logger");
	}
	
	public function indexAction()
	{
		$this->logger->log("ALERT", Zend_Log::ALERT);
		$this->logger->log("Debug MSG", Zend_Log::DEBUG);
		
		$this->logger->log($this->getRequest(), Zend_Log::INFO);
		$this->logger->log($this->db, Zend_Log::INFO);
		$profiler = new Zend_Db_Profiler_Firebug("Get NOTICE PROFILER TITLE");
		
		$profiler->setEnabled(true);
		$this->db->setprofiler($profiler);
		
		$sql = "SELECT * FROM countries where countryid = ?";
		$results = array();
		for($i = 0; $i< 10; $i++){
			$results = $this->db->fetchAll($sql, $i);
			$this->logger->log($result, Zend_Log::INFO);
		}
	}
}
