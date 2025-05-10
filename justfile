#!/usr/bin/env just --justfile
set quiet := true
set unstable := true

default:
    just --list

[doc('Build')]
build:
    cargo build --target wasm32-wasip1 --release


[doc('Linting')]
lint:
    cargo clippy --all -- -D warnings
    nixfmt flake.nix
