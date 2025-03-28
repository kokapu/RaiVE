import subprocess


class SoundEngine:
    def __init__(self):
        self.process = subprocess.Popen(
            # TODO: whatever init command here
            ["python", "raive/ping_pong.py"],
            stdin=subprocess.PIPE,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
        )

    def update(self, prompt):
        self.process.stdin.write(f"{prompt}\n")
        self.process.stdin.flush()

    def get_response(self):
        return self.process.stdout.readline().strip()

    def stop_sound(self):
        self.process.stdin.write("stop_sound\n")
        self.process.stdin.flush()

    def close(self):
        self.process.stdin.write("exit\n")
        self.process.stdin.flush()
        self.process.wait()
