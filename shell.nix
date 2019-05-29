let
    pkgs = import (import ./nix/nixpkgs.nix) {};
in
pkgs.mkShell rec {
    buildInputs = [
        pkgs.nodejs-12_x
    ];
}