#!/usr/bin/env just --justfile
set quiet := true
set unstable := true

default:
    just --list

[doc('Build')]
build:
    wasm-pack build --target web
    sass pkg/styles/main.scss pkg/style.css
    rm pkg/.gitignore

[doc('Linting')]
lint:
    cargo clippy --all -- -D warnings
    nixfmt flake.nix

[doc('Run')]
run: build
    live-server pkg
