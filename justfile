#!/usr/bin/env just --justfile
set quiet
# set dotenv-required
# set dotenv-load := true
# set dotenv-filename := ".env"


default:
    just --list

[doc('Run the application')]
run:
    flask run

[doc('Linting')]
lint:
    flake8 .
