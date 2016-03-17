# call_user_func_array方法

	mixed call_user_func_array ( callable $callback , array $param_arr )

相当于按照数组参数传入函数callback，返回值为callback的返回值；


	<?php
		function  foobar ( $arg ,  $arg2 ) {
		    echo  __FUNCTION__ ,  " got  $arg  and  $arg2 \n" ;
		}
		class  foo  {
		    function  bar ( $arg ,  $arg2 ) {
		        echo  __METHOD__ ,  " got  $arg  and  $arg2 \n" ;
		    }
		}


		// Call the foobar() function with 2 arguments
		call_user_func_array ( "foobar" , array( "one" ,  "two" ));

		// Call the $foo->bar() method with 2 arguments
		$foo  = new  foo ;
		call_user_func_array (array( $foo ,  "bar" ), array( "three" ,  "four" ));
	?>

	输出：

	foobar got one and two
	foo::bar got three and four


call_user_func_array可以直接引用类的方法， 但方法中函数不能直接使用this,最好为静态方法，类可以为对象侧可以使用不是类的方法了；


	
		Class ClassA   
		{   
			private $aa = "ccc";  
			function bc($b, $c) {   
		     	//echo $this->aa;
				//var_dump($this);
		     	$bc = $b + $c;   
				echo $bc;   
			} 

			static function  hell($b, $c){
				$bc = $b + $c;   
				echo $bc; 	
			}
		}  
		echo 222;
		$cc = new ClassA();
		call_user_func_array(array($cc,'bc'), array("111", "222"));

		call_user_func_array(array("ClassA",'bc'), array("111", "222"));

		call_user_func_array(array("ClassA",'hell'), array("111", "222"));



		echo 00;



###参考文档：

 - http://www.hankcs.com/program/call_user_func_array.html


 - http://www.cnitblog.com/neatstudio/archive/2012/07/12/13990.html

 - http://www.hankcs.com/program/call_user_func_array.html

 - http://www.nowamagic.net/librarys/veda/detail/1509

