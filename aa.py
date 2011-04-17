#coding=utf-8
import os,time
TIMEFORMAT='%Y-%m-%d'
print time.strftime(TIMEFORMAT,time.localtime(os.stat( "blog/time.txt").st_mtime))

