from pyzabbix import ZabbixAPI
from pyzabbix import ZabbixAPIException

ZABBIX = {
    'api': 'http://47.98.200.30:8080/',
    'user': 'Admin',
    'pass': 'zabbix'
}

class ZBXAUTH(object):

    def __init__(self):
        self.zbx_api = ZABBIX['api']
        self.zbx_user = ZABBIX['user']
        self.zbx_pass = ZABBIX['pass']
    
    def get_zbx_token(self):
        try:
            zapi = ZabbixAPI(self.zbx_api)
            zapi.login(self.zbx_user, self.zbx_pass)
            print("zabbix API Version: {} .".format(zapi.api_version()))
        except ZabbixAPIException as e:
            print("Error messages: {}".format(e))


if __name__ == '__main__':
    cls = ZBXAUTH()
    cls.get_zbx_token()

