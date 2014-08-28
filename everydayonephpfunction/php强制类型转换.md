# php强制类型转换


php中采用(类型) 对变量进行强制类型转换


example: 

强制转换：

		$var = 123;

		var_dump($var);

		var_dump((boolean)$var);

		var_dump((int)$var);

		var_dump((float)$var);

		var_dump((string)$var);

		var_dump((array)$var);

		var_dump((object)$var);

		$var1 = "123ggg";

		var_dump((int)$varl);

		输出：

		int(123)
		bool(true)
		int(123)
		float(123)
		string(3) "123"
		array(1) {
		  [0]=>
		  int(123)
		}
		object(stdClass)#1 (1) {
		  ["scalar"]=>
		  int(123)
		}

		int(0)






###参考：

	- http://php.net/manual/zh/language.types.type-juggling.php#language.types.typecasting

