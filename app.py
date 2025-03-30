from raive.factory import create_app

import os
import configparser
import sys


config = configparser.ConfigParser()
config_file_path = os.path.abspath(os.path.join("config.ini"))

try:
    if not os.path.exists(config_file_path):
        raise FileNotFoundError(f"Configuration file '{config_file_path}' not found.")

    config.read(config_file_path)
    # TODO: Validate config here

except FileNotFoundError as e:
    print(f"[ERROR] {e}")
    print("[INFO] Please create a 'config.ini' file with the required configuration.")
    sys.exit(1)

except ValueError as e:
    print(f"[ERROR] {e}")
    print(
        "[INFO] Please ensure the 'config.ini' file has the 'PROD' section and the 'DB_URI' key."
    )
    sys.exit(1)

if __name__ == "__main__":
    app = create_app()
    app.run(host="127.0.0.1", port=5000, debug=True)
