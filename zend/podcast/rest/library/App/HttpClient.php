<?php
class  App_HttpClient
{
	const URI = 'http://podcast_rest.lan/api';
	const HTTP_METHOD = 'POST';
	
	protected $client;
	protected $secretkey;
	protected $appName;
	
	public function __construct($appName, $secretkey)
	{
		$this->client = new Zend_Http_Client();
		$this->appName = $appName;
		$this->secretkey = $secretkey;
	}
	
	public function call($method, $args)
	{
		$this->client->setUri(self::URI . '/' . $method);
		$this->client->setParameterPost('appName', $this->appName);
		
		foreach($args as $key => $val){
			$this->client->setParameterPost($key, $val);
		}
		$this->client->setParameterPost('auth', $this->signArguments($args));
		$result = $this->client->request(self::HTTP_METHOD);
		return Zend_Json_Decoder::decode($result->getBody());
		
	}
	
	private function signArguments($args)
	{
		$args['appName'] = $this->appName;
		ksort($args);
		$signature = '';
		foreach($args as $key=>$val){
			$signature .= $key . $val;
		}
		
		return md5($this->secretkey . $signature);
	}
}

?>