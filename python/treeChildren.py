import json

datas = [
 ['节点Id', '节点描述', '父节点'],
 ["root", "根节点", "root", None],
 ["node1", "一级节点1", "root", "root"],
 ["node2", "一级节点2", "root", "root"],
 ["a", "aname", "a", None],
 ["node1", "node1", "a", "a"],
 ["node2", "node2", "a", "a"],
]


class Node(object):
    
    def __init__(self, name: str, desc, parent: str, children: list):
        self.name = name
        self.desc = desc
        self.parent = parent
        self.children = children
    
    def get_nodes(self):
        d = dict()
        d['name'] = self.name
        d['desc'] = self.desc
        d['parent'] = self.parent
        children = self.get_children()
        if children:
            d['children'] = [child.get_nodes() for child in children]
        return d
    
    def get_children(self):
        return [n for n in nodes if n.parent == self.name]

        def __repr__(self):
            return  self.name

# 将原始数据转化为节点对象
nodes = list()
for data in datas:
    node = Node(data[0], data[1], data[-1], [])
    nodes.append(node)

root = nodes[0]
print(root)

tree = root.get_nodes()
print(json.dumps(tree, indent=4))



https://www.jb51.net/article/167316.htm