from collections import defaultdict

s = [('yellow', '1'), ('blue', '2'), ('yellow', '3'), ('blue', '4'), ('red', '5')]
# const cityData = {
#   Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
#   Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
# }

const brandData = [('brandName1', modeName1), ('brandName1', modeName2),];

# s_brandmodelData = [('')]

# const brandmodelData = {
#     brandName1: ['modeName1', 'modeName2', 'modeName3']
#     brandName2: ['ModelName5', 'brandName6', 'brandName4']
# }

d = defaultdict(list)
for k, v in s:
    d[k].append(v)
print(type(s))
print(s[0])
print(sorted(d.items()))
print(d)
