<?php 
//phpinfo();

class A{

	function ccc(){

	}

};

//class name

var_dump(method_exists('A', 'ccc'));

var_dump(method_exists('A', 'bbb'));
// object

$a = new A();

var_dump(method_exists($a, 'ccc'));

var_dump(method_exists($a, '__call'));

var_dump(method_exists($a, '__construct'));

?>