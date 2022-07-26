from cgitb import reset
from app import api as zbx


class TEST(object):

    def __init__(self):
        self.zbx_token = zbx.AUTH().getToken()
        print('self.zbx_token', self.zbx_token)
    
    def getApiVersion(self):
        params = {
            "jsonrpc": "2.0",
            "method": "apiinfo.version",
            "params": [],
            "id": 1
        }
        result = zbx.AUTH().rpcResult(params)
        print('self.apiinfo.version', result)
        return result



if __name__ == '__main__':
    cls = TEST()
    cls.getApiVersion()
    
