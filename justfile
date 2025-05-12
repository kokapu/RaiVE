#!/usr/bin/env just --justfile
set quiet := true
set unstable := true

default:
    just --list

[doc('Build')]
build:
    wasm-pack build --target web

[doc('Linting')]
lint:
    cargo clippy --all -- -D warnings
    nixfmt flake.nix

[doc('Run')]
run: 
  python3 -m http.server 8080 -d pkg
