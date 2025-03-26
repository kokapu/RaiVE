#!/usr/bin/env just --justfile
set quiet
# set dotenv-required
# set dotenv-load := true
# set dotenv-filename := ".env"

default:
    just --list

run:
    flask run

lint:
    flake8 .
