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

build-image:
  nix build .#raiveImage
  docker load < result

publish-image: build-image
  docker tag jp/raive:v0.1.0 jachympu/raive:v0.1.0
  docker push jachympu/raive:v0.1.0
