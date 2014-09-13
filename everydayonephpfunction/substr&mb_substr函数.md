# substr & mb_substr函数


截取字符串


case:


        <?php
        $rest = substr("abcdef", -1);    // 返回 "f"
        $rest = substr("abcdef", -2);    // 返回 "ef"
        $rest = substr("abcdef", -3, 1); // 返回 "d"
        ?>


        <?php
        $rest = substr("abcdef", 0, -1);  // 返回 "abcde"
        $rest = substr("abcdef", 2, -1);  // 返回 "cde"
        $rest = substr("abcdef", 4, -4);  // 返回 ""
        $rest = substr("abcdef", -3, -1); // 返回 "de"
        ?>




##注意要点

1. 如截取出错返回值为false;var_dump(substr("string", 1, -100));



##参考

- http://cn2.php.net/substr