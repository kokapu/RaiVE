#!/usr/bin/env just --justfile
set quiet := true
set unstable := true

default:
    just --list

[doc('Build')]
build:
    wasm-pack build --target web --out-dir raive-ui/src/pkg
    sass raive-ui/src/styles/main.scss raive-ui/src/style.css
    rm raive-ui/src/pkg/.gitignore

[doc('Linting')]
lint:
    cargo clippy --all -- -D warnings
    nixfmt flake.nix

[doc('Run')]
run: build
    npm run dev --prefix raive-ui
