from collections import deque
queue = deque(["aa", "bb", "cc"])
queue.append("Terry")  # Terry arrives
queue.popleft() # The first to arrive now leaves
queue.popleft() # The second to arrive now leaves