{
  description = "RaiVE -- making music accessible";


  inputs = {
    oxalica.url = "github:oxalica/rust-overlay";
    flake-utils.url = "github:numtide/flake-utils";
    nixpkgs.url = "github:NixOS/nixpkgs";
  };

  outputs = inputs@{ self, nixpkgs, flake-utils, oxalica }:
    flake-utils.lib.eachDefaultSystem (system:
    let
      pkgs = import nixpkgs {
          inherit system;
          overlays = [ (import oxalica) ];
      };

      rustWasmTarget = "wasm32-unknown-unknown";
      rustToolchain = with pkgs; [
            (rust-bin.fromRustupToolchainFile ./rust-toolchain.toml)
      ];

      # TODO: fix this package
      wasmPkg = pkgs.rustPlatform.buildRustPackage {
          pname = "raive";
          src = self;
          version = "0.1.0";
          CARGO_BUILD_TARGET = rustWasmTarget;
          RUSTFLAGS = "-C target-feature=+atomics,+bulk-memory,+mutable-globals";
          buildInputs = with pkgs; [ 
            wabt 
          ];
          nativeBuildInputs = with pkgs; [ 
            wabt 
          ];
          cargoLock = {
            lockFile = ./Cargo.lock;
            outputHashes = {
              # NOTE: Custom fork is not in crates
              "gemini-rust-0.4.2" = "sha256-8ojKJpuNJKYLMhqPFm74gstVpt19FWknvt5iKspYZ7k="; 
            };
          };
        };
    in
    {
      # Development environments
      devShell = pkgs.mkShell {
        RUST_SRC_PATH = pkgs.rustPlatform.rustLibSrc;
        shellHook = ''
          export CARGO_TARGET_DIR="$(git rev-parse --show-toplevel)/target_dirs/nix_rustc";
        '';
        nativeBuildInputs = with pkgs; [
          pkg-config
          rustToolchain # cargo, etc.
          wasm-bindgen-cli
          wasm-pack
          just
        ];
      };

      defaultPackage = wasmPkg;
  });
}
