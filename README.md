# rAIve

## Setting up
### Dependencies
#### Nix
If using nix the only external dependency is `Docker`, for `nix` to work with
the `justfile` create a `.env` file in the root of the project and set the 
`USE_NIX` environment variable.
```sh
echo "USE_NIX=true" >> .env
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
