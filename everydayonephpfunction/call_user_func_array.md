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



###参考文档：

http://www.hankcs.com/program/call_user_func_array.html

