{
  inputs = {
    nixpkgs.url    = "github:NixOS/nixpkgs";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
    let
      pkgs     = import nixpkgs { inherit system; };
      py312    = pkgs.python312Packages;

      raiveApp = py312.buildPythonApplication rec {
        pname     = "raive";
        version   = "0.1.0";
        pyproject = true;
        src       = ./.;
        build-system = with py312; [ 
            setuptools 
            wheel
          ];

        propagatedBuildInputs = with py312; [
          flask 
          flask-cors 
          python-dotenv
          requests
          flask-session
          huggingface-hub
          gunicorn
          bcrypt 
          google-generativeai
          flake8
          sphinx
        ];

        meta = with pkgs.lib; {
          description = "RaiVE AI-enhanced live-coding";
        };
      };


      docker = pkgs.dockerTools.buildLayeredImage {
        name    = "jp/raive";
        tag     = "v0.1.0";
        contents = [ raiveApp ];

        config = {
          ExposedPorts = { "8000/tcp" = {}; };
          Cmd = [ "raive" ];
          WorkingDir = "/raive";
        };
      };

    in {
      packages.raiveImage = docker;
      packages.raive     = raiveApp;
      defaultPackage     = raiveApp;

      devShells.default = pkgs.mkShell {
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
                gunicorn
                google-generativeai
                pip
              ])
            )
            just
            nodejs
            nodePackages.live-server
            nodePackages.vscode-langservers-extracted
            git
          ];
      };
    }
  );
}

