def ask_ok(prompt, retries=4, reminder='Please try again!'):
    while True:
        ok = input(prompt)
        if ok in ('y', 'ye', 'yes'):
            return True
        if ok in ('n', 'no', 'nop', 'nope'):
            return False
        retries = retries - 1
        if retries < 0:
            raise ValueError('invalid user response')
        print(reminder)

# 只给出必需的参数：ask_ok('Do you really want to quit?')

# 给出一个可选的参数：ask_ok('OK to overwrite the file?', 2)

# 或者给出所有的参数：ask_ok('OK to overwrite the file?', 2, 'Come on, only yes or no!')