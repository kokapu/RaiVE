#!/usr/bin/env python3
import multiprocessing

from raive.factory import create_app
from gunicorn.app.base import BaseApplication


def main():
    app = create_app()

    options = {
        "bind": "0.0.0.0:8000",
        "workers": (multiprocessing.cpu_count() * 2)
        + 1,  # 2 x CPU cores + 1 is a good rule
        "accesslog": "-",  # send access logs to stdout
        "errorlog": "-",  # send error logs to stdout
        "loglevel": "info",
    }

    class StandaloneApplication(BaseApplication):
        """Simple Gunicorn application wrapper."""

        def __init__(self, app, options=None):
            self.application = app
            self.options = options or {}
            super().__init__()

        def load_config(self):
            cfg = self.cfg
            for key, value in self.options.items():
                if key in cfg.settings and value is not None:
                    cfg.set(key.lower(), value)

        def load(self):
            return self.application

    StandaloneApplication(app, options).run()


if __name__ == "__main__":
    main()
