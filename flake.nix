{
  description = "Nix NodeJS Version Builder";

  inputs = { nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable"; };

  outputs = inputs@{ flake-parts, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      imports = [ ];
      systems =
        [ "aarch64-darwin" "x86_64-darwin" "x86_64-linux" "aarch64-linux" ];
      perSystem = { config, self', inputs', pkgs, system, ... }: {
        packages = {
          nodejs21-darwin-arm64 = pkgs.stdenv.mkDerivation {
            name = "nodejs21.6.1-darwin-arm64";
            src = pkgs.fetchurl {
              url =
                "https://nodejs.org/dist/v21.6.1/node-v21.6.1-darwin-arm64.tar.gz";
              sha256 = "sha256-lMKAu6gJ+maGfjY+yemQIXrt+JMRZmC4x1ocT9o7rqU=";
            };
            installPhase = ''
              echo "installing nodejs"
              mkdir -p $out
              cp -r ./ $out/
            '';
          };

          nodejs21-darwin-x64 = pkgs.stdenv.mkDerivation {
            name = "nodejs21.6.1-darwin-x64";
            src = pkgs.fetchurl {
              url =
                "https://nodejs.org/dist/v21.6.1/node-v21.6.1-darwin-x64.tar.gz";
              sha256 = "sha256-N+CajPI1LzQNEgTGFUBY2BNi/vTsSIsBl7LONrPwNno=";
            };
            installPhase = ''
              echo "installing nodejs"
              mkdir -p $out
              cp -r ./ $out/
            '';
          };

          nodejs21-linux-x64 = pkgs.stdenv.mkDerivation {
            name = "nodejs21.6.1-linux-x64";
            src = pkgs.fetchurl {
              url =
                "https://nodejs.org/dist/v21.6.1/node-v21.6.1-linux-x64.tar.gz";
              sha256 = "sha256-0cHeRhvhC/2ccOuuRzMPsbSrCpitcwgj+xNA40mT7e4=";
            };
            installPhase = ''
              echo "installing nodejs"
              mkdir -p $out
              cp -r ./ $out/
            '';
          };

          nodejs21-linux-arm64 = pkgs.stdenv.mkDerivation {
            name = "nodejs21.6.1-linux-arm64";
            src = pkgs.fetchurl {
              url =
                "https://nodejs.org/dist/v21.6.1/node-v21.6.1-linux-arm64.tar.gz";
              sha256 = "sha256-KqOH5qV63mY4Se/cT6v3Qxo42XXbmNzHkpOEDmiU0os=";
            };
            installPhase = ''
              echo "installing nodejs"
              mkdir -p $out
              cp -r ./ $out/
            '';
          };
        };

        devShells.default = pkgs.mkShell {
          buildInputs = [
            (if system == "aarch64-linux" then
              self'.packages.nodejs21-linux-arm64
            else if system == "aarch64-darwin" then
              self'.packages.nodejs21-darwin-arm64
            else if system == "x86_64-linux" then
              self'.packages.nodejs21-linux-x64
            else if system == "x86_64-darwin" then
              self'.packages.nodejs21-darwin-x64
            else
              null)
            pkgs.bun
            pkgs.gnused
            pkgs.docker
            pkgs.nodePackages.node-gyp-build
            pkgs.nodePackages."dockerfile-language-server-nodejs"
            pkgs.nodePackages."typescript"
            pkgs.nodePackages."typescript-language-server"
            pkgs.nodePackages."vscode-langservers-extracted"
            pkgs.nodePackages."@tailwindcss/language-server"
            pkgs.emmet-ls
          ];

        };
      };

      flake = { };
    };
}
