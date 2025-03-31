{
  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
    nixpkgs.url = "github:NixOS/nixpkgs";
  };

  outputs = {
    self,
    flake-utils,
    nixpkgs,
  }:
    flake-utils.lib.eachDefaultSystem (
      system: let
        pkgs = (import nixpkgs) {
          inherit system;
        };
      in rec {
        devShell = pkgs.mkShell {
          nativeBuildInputs = with pkgs; [
            (pkgs.python312.withPackages (
              python-pkgs: with python-pkgs; [
                flask
                flask-cors
                python-dotenv
                requests
                flask-session
                huggingface-hub
                bcrypt
                flake8
                sphinx
                google-generativeai
              ])
            )
            just
            nodejs
            nodePackages.live-server
            nodePackages.vscode-langservers-extracted
          ];
        };
      }
    );
}

