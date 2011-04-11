#coding=utf-8
import codecs
import os
import os.path 

rootdir = "blog/"
catafile = codecs.open("blog/catalog.txt",'w',"utf-8")
string = ""
link = ""
for f in os.listdir(rootdir):
    if(f!="catalog.txt"):
      blog = codecs.open('blog/'+f,"r","utf-8")
      str = blog.readline()
      string+=("  -["+str(:-1)+"]");
      link+="  ["+str+"]: blog/"+f+""
      blog.close()
      
catafile.write("#"+string+"\n\n"+link)
catafile.close()
print "======================="


