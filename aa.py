#coding=utf-8
import os,time
TIMEFORMAT='%Y-%m-%d'
print time.strftime(TIMEFORMAT,time.localtime(os.stat( "blog/string.txt").st_mtime))
print time.strftime(TIMEFORMAT,time.localtime(os.stat( "blog/string.txt").st_ctime))

