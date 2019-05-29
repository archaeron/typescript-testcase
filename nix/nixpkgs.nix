let
    hostPkgs = import <nixpkgs> {};
    pinnedVersion = hostPkgs.lib.importJSON ./nixpkgs-version.json;
in
    hostPkgs.fetchFromGitHub {
        owner = "NixOS";
        repo = "nixpkgs";
        inherit (pinnedVersion) rev sha256;
    }