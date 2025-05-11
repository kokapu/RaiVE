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

      name = "raive";
      src = self;

      wasmPkg = pkgs.rustPlatform.buildRustPackage {
          inherit src;
          pname = "raive";
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
          postInstall = ''
            mkdir -p $out/lib
            wasm-strip $out/bin/${name} -o $out/lib/${name}.wasm
            rm -rf $out/bin
            wasm-validate $out/lib/${name}.wasm
          '';
        };

      # wasmTimeExec = pkgs.stdenv.mkDerivation rec {
      #     inherit name src;
      #     nativeBuildInputs = with pkgs; [ makeWrapper ];
      #     installPhase = ''
      #       mkdir -p $out/lib
      #       cp ${wasmPkg}/lib/${name}.wasm $out/lib/${pkgName}.wasm
      #       makeWrapper ${pkgs.wasmtime}/bin/wasmtime $out/bin/${pkgName} \
      #         --set WASMTIME_NEW_CLI 1 \
      #         --add-flags "$out/lib/${pkgName}.wasm"
      #     '';
      #   };
      #
      # wasmEdgeExec = pkgs.stdenv.mkDerivation rec {
      #     inherit name src;
      #     nativeBuildInputs = with pkgs; [ makeWrapper ];
      #     installPhase = ''
      #       mkdir -p $out/lib
      #       cp ${wasmPkg}/lib/${name}.wasm $out/lib/${pkgName}.wasm
      #       makeWrapper ${pkgs.wasmedge}/bin/wasmedge $out/bin/${pkgName} \
      #         --add-flags "$out/lib/${pkgName}.wasm"
      #     '';
      #   };
      #
      # # Take a Wasm binary and strip it, provide stats, etc.
      # buildWasmPackage = pkgs.stdenv.mkDerivation {
      #     inherit name src;
      #     buildInputs = with pkgs; [
      #       # includes wasm-strip, wasm2wat, wasm-stats, wasm-objdump, and wasm-validate
      #       wabt
      #       pkg-config
      #     ];
      #     buildPhase = ''
      #       mkdir -p $out/{lib,share}
      #       cp ${wasmPkg}/lib/${name}.wasm $out/lib/${pkgName}.wasm
      #       wasm2wat $out/lib/${pkgName}.wasm > $out/share/${pkgName}.wat
      #       wasm-stats $out/lib/${pkgName}.wasm -o $out/share/${pkgName}.dist
      #       wasm-objdump \
      #         --details $out/lib/${pkgName}.wasm > $out/share/${pkgName}-dump.txt
      #     '';
      #     doCheck = true;
      #   };
    in
    {
      # Development environments
      devShell = pkgs.mkShell {
        RUST_SRC_PATH = pkgs.rustPlatform.rustLibSrc;
        shellHook = ''
          export CARGO_TARGET_DIR="$(git rev-parse --show-toplevel)/target_dirs/nix_rustc";
        '';
        nativeBuildInputs = with pkgs; [
          python3
          pkg-config
          rustToolchain # cargo, etc.
          # wabt # WebAssembly Binary Toolkit
          # wasmedge # Wasm runtime
          # wasmtime # Wasm runtime
          wasm-bindgen-cli
          just
          direnv
          jq 
        ];
      };

      defaultPackage = wasmPkg;
  });
}
