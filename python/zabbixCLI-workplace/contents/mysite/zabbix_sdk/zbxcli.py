from api import zbx_pyzabbix as zbx
from conf import setting as st
from pyzabbix import ZabbixAPIException

class ZBXCLI(object):
    
    def __init__(self):
        self.zapi = zbx.ZBXAUTH().get_zbx_token()
        # print("init self.zapi", self.zapi)
        st.logger.info("self.zapi:{}".format(self.zapi.api_version()))

    def test_zapi(self):
        try:
            self.zapi
            print("test zapi:{}".format(self.zapi.api_version()))
        except ZabbixAPIException as e:
            st.logger.error(str(e))
            exit(1)
            


if __name__ == '__main__':
    cls = ZBXCLI()
    cls.test_zapi()
