<?php
    $xml = new DOMDocument('1.0', 'utf-8');
    $xml->formatOutput = true;
    $xml->preserveWhiteSpace = false;
    $xml->load('ammap_data.xml');
    
    $element = $xml->getElementsByTagName('areas')->item(0);
    $name = $element->getElementsByTagName('name')->item(0);
    $name->nodeValue = 'Orange';
    
?>