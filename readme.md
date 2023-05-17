# dongthereum
**dongthereum** is a blockchain built using Cosmos SDK and Tendermint and created with [Ignite CLI](https://ignite.com/cli).

## Get started : Validator

```
go install ./...

dongthereumd init mainnet --chain-id dongthereum-mainnet

dongthereumd keys add validator --keyring-backend test

dongthereumd add-genesis-account cosmos1t55ersp5pe840kmwhgx2v6lyqjutgqammd2rvn 1000000stake --keyring-backend test

dongthereumd gentx validator 1000000stake --chain-id dongthereum-testnet --keyring-backend test

dongthereumd collect-gentxs

dongthereumd validate-genesis

dongthereumd start

```

## Release
To release a new version of your blockchain, create and push a new tag with `v` prefix. A new draft release with the configured targets will be created.

```
git tag v0.1
git push origin v0.1
```

After a draft release is created, make your final changes from the release page and publish it.

### Install
To install the latest version of your blockchain node's binary, execute the following command on your machine:

```
curl https://get.ignite.com/nadongjun/dongthereum@latest! | sudo bash
```
`nadongjun/dongthereum` should match the `username` and `repo_name` of the Github repository to which the source code was pushed. Learn more about [the install process](https://github.com/allinbits/starport-installer).

## Learn more

- [Ignite CLI](https://ignite.com/cli)
- [Tutorials](https://docs.ignite.com/guide)
- [Ignite CLI docs](https://docs.ignite.com)
- [Cosmos SDK docs](https://docs.cosmos.network)
- [Developer Chat](https://discord.gg/ignite)
