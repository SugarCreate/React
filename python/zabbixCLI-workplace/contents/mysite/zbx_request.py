import requests
import json
import urllib3


ZABBIX = {
    'api': 'http://47.98.200.30:8080/',
    'url': 'http://47.98.200.30:8080/api_jsonrpc.php',
    'user': 'Admin',
    'pass': 'zabbix'
}

class AUTH(object):

    def __init__(self):
        self.zbx_api = ZABBIX['api']
        self.zbx_url = ZABBIX['url']
        self.zbx_user = ZABBIX['user']
        self.zbx_pass = ZABBIX['pass']
    
    def rpc_result(self, params):
        headers = {"Content-Type": "application/json-rpc"}
        rsp = requests.post(url=self.zbx_url, headers=headers, data=json.dumps(params))
        try:
            return rsp.json()['result']
        except:
            print("Error message: ", rsp.json()['error'])
            exit(1)

    def get_cookies(self):
        params = {
            "name": ZABBIX['user'],
            "pass": ZABBIX['pass'],
            "enter": "Sign in"
        }
        rsp = requests.post("/".join(ZABBIX['api'].split("/")[:-1]) + "/index.php?login=1/", data=params)
        print('rsp', rsp)   # rsp <Response [200]>
        print(rsp.cookies) # <RequestsCookieJar[<Cookie zbx_session=eyJzZXNzaW9uaWQiOiI0ZDEwMTRkYTI3ZGMyOThlZGQ2NmEwOTRiYTIxYWUzNyIsInNpZ24iOiI2OTI0ZGVlMjFkZDZkNWI2N2I2ZTJiY2RiNTIzMDM1NDM1ZGM1MjM4OGVlOWVlZDIxNjQ4M2IxMmEzOWNlYmE5In0%3D for 47.98.200.30/>]>
        return rsp.cookies

    def get_token(self):
        params = {
            "jsonrpc": "2.0",
            "method": "user.login",
            "params": {
                "user": self.zbx_user,
                "password": self.zbx_pass,
            },
            "id": 1,
        }
        print("token is : ", self.rpc_result(params)) # token is :  23c9491e6c5ad578ac63220d4b81d117
        return self.rpc_result(params)

    def destory_token(self, token):
        params = {
            "jsonrpc": "2.0",
            "method": "user.logout",
            "params": [],
            "auth": token,
            "id": 1
        }
        print('token destoryed success.', self.rpc_result(params))
        return self.rpc_result(params)

if __name__ == '__main__':
    cls = AUTH()
    # cls.get_cookies()
    # cls.get_token()
    token = cls.get_token()
    cls.destory_token(token)
    # token is :  fdae8ae316e8512b6fffc9349c0f1a54
    # token destoryed success. True
    # Error message:  {'code': -32602, 'message': 'Invalid params.', 'data': 'Session terminated, re-login, please.'}

