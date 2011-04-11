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
      str1 = blog.readline()
      string+=("  - ["+str1.strip()+"]\n");
      link+="  ["+str1[:-2]+"]: #blog/"+f+"\n"
      blog.close()
      
catafile.write(string+"\n\n"+link)
catafile.close()
print "======================="


