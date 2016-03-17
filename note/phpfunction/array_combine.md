#array_combine



合并两个数组，合并后其中一个array的值作为键名，另一个数组的值为键值


	array array_combine(array_keys, array_values)

**注意点**：

 - keys和values两个数组的长度必须一致否侧会报错误警告

example:


	
		$array1 = array('aa' => 2,'bb'=>3 );

		$array2 = array('ddd' =>4 , "cccc"=>555 );

		var_dump(array_combine($array1, $array2));

		结果：

		array(2) {
		  [2]=>
		  int(4)
		  [3]=>
		  int(555)
		}
