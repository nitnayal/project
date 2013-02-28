<?php

class IndexControllerTest extends ControllerTestCase
{
	public function testCanGetDefaultIndexPage()
	{
		$this->dispatch("/");
		$this->assertController("index");
		$this->assertAction("index");
		$this->assertResponseCode(200);
		
		$this->assertXpathContentContains("id('message')","default");
	}
	
	public function testCanSetMessageIndex()
	{
		$this->getRequest()
			->setMethod('GET')
			->setParams(array('m' => 'some message'));
		$this->dispatch("/");
		$this->assertController("index");
		$this->assertAction("index");
		$this->assertResponseCode(200);
		
		$this->assertXpathContentContains("id('message')","some message");
	}
	
	public function testCanGetToAboutPage()
	{
		$this->dispatch("/index/about");
		
//echo $this->getResponse()->getBody();
		$this->assertController("index");
		$this->assertAction("about");
		$this->assertResponseCode(200);
	}
}