from django.test import TestCase

# Create your tests here.

def consistentLineLength(filename, length):
    fileHandle=open(filename)
    theStr=""
    for line in fileHandle.readlines():
        theStr+=line
    theStr=theStr.replace("\n"," ")
    strList=theStr.split(" ")
    if len(strList[-1])==0:
        strList.pop(-1)
    tempStr=""
    resultList=[]
    i=0
    while i<len(strList):
        if tempStr=="":
            if len(tempStr+strList[i])<=length:
                tempStr+=strList[i]
            i+=1
            if i==len(strList): # 如果当前已经到了最后一个元素，那就直接添加
                resultList.append(tempStr)
        else:
            if len(tempStr+" "+strList[i])<=length: # 如果tempStr不是空，那加入下一个单词之前先加一个空格
                tempStr+=" "
                tempStr+=strList[i]
                i+=1

            else:
                resultList.append(tempStr)
                tempStr=""
    print('result list', resultList)
    return resultList

if __name__ == '__main__':
    consistentLineLength(r'files/strli.txt', 6)