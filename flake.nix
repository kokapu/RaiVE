{
  description = "RaiVE -- making music accessible";

  inputs = {
    oxalica.url = "github:oxalica/rust-overlay";
    flake-utils.url = "github:numtide/flake-utils";
    nixpkgs.url = "github:NixOS/nixpkgs";
  };

  outputs =
    {
      self,
      nixpkgs,
      flake-utils,
      oxalica,
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs {
          inherit system;
          overlays = [ (import oxalica) ];
        };

        rustToolchain = with pkgs; [
          (rust-bin.fromRustupToolchainFile ./rust-toolchain.toml)
        ];
      in
      {
        devShell = pkgs.mkShell {
          RUST_SRC_PATH = pkgs.rustPlatform.rustLibSrc;
          shellHook = ''
            export CARGO_TARGET_DIR="$(git rev-parse --show-toplevel)/target_dirs/nix_rustc";
          '';
          nativeBuildInputs = with pkgs; [
            # Front-end
            nodePackages.live-server
            nodePackages.npm
            nodePackages.sass

            # WASM
            rustToolchain
            wasm-bindgen-cli
            wasm-pack

            # Build / Lint utilities
            pkg-config
            just
            nil
            nixfmt-rfc-style
          ];
        };
      }
    );
}
