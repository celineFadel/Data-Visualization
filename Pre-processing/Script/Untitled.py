#!/usr/bin/env python
# coding: utf-8

# the below is to compute the cumulative number of refugees

# In[ ]:


f=open("Lebanon asylum.csv","r")
content=f.readlines()[1:-4]
f.close()
content=[x.rstrip().split(",") for x in content]
for i in range(len(content)):
    for j in range(len(content[i])):
        content[i][j]=content[i][j].replace('"','')
count={}
for i in range(len(content)):
    if(len(content[i])>2):
        if content[i][2] not in count:
            count[content[i][2]]=0
        if len(content[i][3])>0:
            count[content[i][2]]=int(content[i][3])+count[content[i][2]]
f=open("refugees_count.csv","w")
f.write("Year,Refugees")
for i in count:
    f.write("\n")
    f.write(str(i)+","+str(count[i]))
f.close()


# The below is to genrate the network dataset from the important lebanese people datset.
# It groups the people according to their country, and then people with the same profession are linked.

# In[ ]:


f=open("Lebanon origin.csv","r")
content=f.readlines()[1:-4]
content=[x.rstrip().split(",") for x in content]
f.close()


# In[ ]:


country={}
for i in content:
    if len(i)>2:
        if i[1] not in country:
            country[i[1]].append({})
        if i[1][0] not in country[i]:
            country[i].append(country[i][0])


# In[ ]:


f=open("people.csv","r")
content=f.readlines()[1:]
f.close()
content=[x.rstrip().split(",") for x in content]
nodes=[]
for i in content:
    nodes.append({"id":i[0],"group":i[3],"profession":i[4]})
links=[]
for i in range(len(content)-1):
    for j in range(i+1,len(content)):
        if content[i][4]==content[j][4]:
            links.append({"source":content[i][0],"target":content[j][0],"value":10,"group1":content[i][3],"group2":content[j][3]})

everything={"nodes":nodes,"links":links}
f=open("people.json","w")
f.write(str(everything))
f.close()


# In[ ]:





# This is to quickly generate the array of countries that received Lebanese diaspora

# In[ ]:


a="Argentina,Armenia,Australia,Austria,Belarus,Belgium,Brazil,Bulgaria,Canada,Croatia,Côte d'Ivoire,Curacao,Cyprus,Czechia,Denmark,Ecuador,Estonia,Finland,France,Georgia,Germany,Ghana,Greece,Hungary,Iceland,Ireland,Israel,Italy,Jordan,Kuwait,Latvia,Lithunia,Luxembourg,Macedonia,Malaysia,Malta,Mauritania,Mexico,Moldova,Nauru,Netherlands,New Zealand,Norway,Nigeria,Portugal,Peru,Philippines,Poland,Qatar,Romania,Russia,Serbia,Slovakia,Slovenia,South Africa,Spain,Sweden,Switzerland,Syria,Turkey,Ukraine,UK,USA,Venezuela,Zambia,Zimbabwe"


# In[ ]:


for i in a.split(","):
    print('"'+i+'"',end=",")


# In[ ]:




