from re import X
import time
import datetime

def get_date_today_as_filename():
    x = time.strftime("%Y-%m-%d")
    print(x)
    return x

if __name__ == '__main__':
    get_date_today_as_filename()
    