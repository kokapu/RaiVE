#!/usr/bin/env just --justfile
set quiet := true
set unstable := true

default:
    just --list

[doc('Build')]
build:
    wasm-pack build
    # cargo build --target wasm32-unknown-unknown --release
    # wasm-bindgen --target web --out-dir web-out ./target_dirs/nix_rustc/wasm32-unknown-unknown/release/raive.wasm


[doc('Linting')]
lint:
    cargo clippy --all -- -D warnings
    nixfmt flake.nix

[doc('Run')]
run: build
  python3 -m http.server 8080 -d web-out
