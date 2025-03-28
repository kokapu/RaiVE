import sys

while True:
    line = sys.stdin.readline().strip()
    if line == "exit":
        break
    print(line)
    sys.stdout.flush()
