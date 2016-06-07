#coding=utf-8
# logging handlers TimedRotatingFileHandler

import logging
from logging.handlers import TimedRotatingFileHandler

log = logging.getLogger("sssss")

formatter = logging.Formatter('%(name)-12s %(asctime)s level-%(levelname)-8s thread-%(thread)-8d %(message)s')

fileTimeHandler = TimedRotatingFileHandler("timelog", "M", 1, 11)

fileTimeHandler.suffix = "%Y-%m-%d——%H-%M-%S.log"  
fileTimeHandler.setFormatter(formatter)
logging.basicConfig(level = logging.INFO)
fileTimeHandler.setFormatter(formatter)
log.addHandler(fileTimeHandler)
try:
     log.error("ddddddddddddddddd")
except Exception, e:
    print "writeLog error"
finally:
   log.removeHandler(fileTimeHandler)