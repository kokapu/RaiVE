# rAIve

## Setting up
### Dependencies
#### Nix
If running with Nix, the only dependency is Nix itself. Start by installing Nix:
```sh
curl --proto '=https' --tlsv1.2 -sSf -L https://install.determinate.systems/nix | sh -s -- install
```
Then set up the environment to use Nix:
```sh
nix develop
```

#### Other
Running all parts of this repository will require the following dependencies:
- Just
- Python 3.12

## Running
The entire functionality of this repository is controlled by the `justfile`.
To see all available commands with brief descriptions run:
```sh
just
```
